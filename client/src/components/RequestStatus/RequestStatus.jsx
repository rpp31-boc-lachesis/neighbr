/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import LinearProgress from '@mui/material/LinearProgress';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Tooltip from '@mui/material/Tooltip';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import PropTypes from 'prop-types';
import RequestMap from './RequestMap.jsx';
import RunnerContainer from './RunnerContainer.jsx';

function LinearProgressWithLabel(percentage) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...percentage} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {percentage.value}
          %
        </Typography>
      </Box>
    </Box>
  );
}

export default function RequestStatus(props) {
  // const [promisedBy, setPromisedBy] = React.useState(null);
  const [pickupData, setPickupData] = React.useState({});
  const [done, setDone] = React.useState(false);
  const [dropoff, setDropoff] = React.useState(null);
  const [dropoffNote, setDropoffNote] = React.useState(null);
  // const [runner, setRunner] = React.useState({});
  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState(null);
  // const [hover, setHover] = React.useState(-1);
  // const [mouseover, setMouseover] = React.useState(false);
  // const [editMode, setEditMode] = React.useState(false);
  const [runnerFullname, setRunnerFullname] = React.useState('');
  const [runnerAvatar, setRunnerAvatar] = React.useState('');
  const [runnerUsername, setRunnerUsername] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cart = useLocation().state.req_items || [];
  const promisedBy = `${new Date(useLocation().state.end_time)}`;

  const {
    user, errands, users, locations
  } = props;

  const {
    accepted, message, pickup, requester, size, weight, _id, runner,
    transportation, category
  } = useLocation().state;

  console.log('entire state: ', useLocation().state);

  for (let i = 0; i < locations.length; i += 1) {
    if (locations[i]._id === pickup.locationId) {
      setPickupData(locations[i]);
      console.log('pickup data: ', locations[i]);
    }
  }

  if (runner) {
    axios.get(`/user/${runner}`)
      .then((results) => {
        setRunnerAvatar(results.data[0].avatar_url);
        setRunnerUsername(results.data[0].username);
        setRunnerFullname(`${results.data[0].first_name} ${results.data[0].last_name}`);
      })
      .then(() => {
        console.log('avatar, username, fullname: ', runnerAvatar, runnerUsername, runnerFullname);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  axios.get(`/users/${user}`)
    .then((results) => {
      const dropoffAddress = `${results.data[0].street_address}, ${results.data[0].city}, ${results.data[0].state} ${results.data[0].zip}`;
      setDropoff(dropoffAddress);
    })
    .catch((err) => {
      console.error(err);
    });

  const progressTotal = cart.map((item) => (item.status !== 'Cancelled')).reduce((a, b) => a + b, 0) * 100;
  let accum = 0;

  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].status === 'Cancelled') {
      accum += 0;
    } else if (cart[i].status === 'In-Progress') {
      accum += 50;
    } else if (cart[i].status === 'Completed') {
      accum += 100;
    }
  }

  const isAccepted = () => {
    if (accepted) {
      return (accum / progressTotal) * 100;
    }
    return 0;
  };

  setProgress(isAccepted());

  React.useEffect(() => {
    // const newEndTime = `${new Date(endTime)}`;
    // setPromisedBy(newEndTime);

    // axios.get(`/users/${user}`)

    // axios.get(`/requestStatus/${errandData._id}`)
    //   .then((results) => {
    //     axios.get(`/user/${results.data.runner}`)
    //       .then((result) => {
    //         console.log('runner: ', result.data);
    //         setRunner(result.data[0]);
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });

  }, []);

  const sx = {
    border: '2px solid #DE9DE9',
    borderRadius: '10px',
    maxWidth: '85%',
    margin: 'auto'
  };

  // const handleNoteChange = (e) => {
  //   console.log('target value: ', e.target.value);
  //   // setDropoffNote(e.target.value);
  // };

  // const handleMouseover = React.useCallback(() => {
  //   if (!mouseover) {
  //     setMouseover(true);
  //   }
  // });

  // const handleMouseout = React.useCallback(() => {
  //   if (mouseover) {
  //     setMouseover(false);
  //   }
  // });

  // const handleEditClick = React.useCallback(() => {
  //   setEditMode(true);
  //   setMouseover(false);
  // });

  // const textStyles = () => ({
  //   container: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   textField: {
  //     margin: 'auto',
  //     width: 200,
  //   },
  //   dense: {
  //     marginTop: 19,
  //   },
  //   menu: {
  //     width: 200,
  //   },
  // });

  function progressMessage(percentage) {
    if (percentage === 0 || !runner) {
      return 'Not Started';
    }
    if (percentage < 100) {
      return 'In Progress';
    }
    return 'Completed';
  }

  function statusIcon(status) {
    if (status === 'In-Progress' && !accepted) {
      return (
        <Tooltip title="Errand not started">
          <HourglassDisabledIcon />
        </Tooltip>
      );
    }
    if (status === 'Cancelled') {
      return (
        <Tooltip title="Cancelled">
          <CloseIcon />
        </Tooltip>
      );
    }
    if (status === 'Completed') {
      return (
        <Tooltip title="Completed">
          <CheckIcon />
        </Tooltip>
      );
    }
    return (
      <Tooltip title="In-Progress">
        <HourglassEmptyIcon />
      </Tooltip>
    );
  }

  return (
    <Container fixed sx={{ pb: 10 }}>
      <Typography display="block" align="left" variant="subtitle1" sx={{ pl: 11 }}>
        Request: &nbsp;
        {pickupData.placeText}
      </Typography>
      <RequestMap pickup={pickupData.coordinates || [0, 0]} />
      <Grid
        container
        sx={sx}
      >
        <Grid item>
          <AccessTimeIcon style={{
            width: '30px', height: '30px', fill: '#5D5FEF'
          }}
          />
        </Grid>
        <Grid item sx={{ m: 1 }}>Promised by:</Grid>
        <Grid item xs={1} />
        <Grid item sx={{ m: 1 }}>{promisedBy}</Grid>
      </Grid>
      <Typography display="block" align="justify" variant="h6" sx={{ pl: 11 }}>Errand Details</Typography>
      <Grid
        container
        sx={sx}
      >
        <Grid item xs={4} justifyContent="flex-end">
          {accepted ? <RunnerContainer runnerAvatar={runnerAvatar} runnerFullname={runnerFullname} runnerUsername={runnerUsername} open={open} progress={progress} /> : <Typography variant="caption">No runner yet!</Typography>}
          {/* setDone={setDone} handleOpen={handleOpen()} handleClose={handleClose}  */}
          {/* setDone={setDone} handleOpen={handleOpen()} handleClose={handleClose}
          setValue={setValue} setHover={setHover} */}
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Pick-Up:
          </Typography>
          <Typography variant="overline">
            {pickupData.placeText}
            &nbsp;
          </Typography>
          <Typography variant="caption">
            {pickupData.address}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Drop-Off: &nbsp;
          </Typography>
          <Typography variant="caption">
            {dropoff}
          </Typography>
          <Typography variant="body2">
            {dropoffNote === undefined || dropoffNote === null ? '' : `Note: ${dropoffNote}`}
          </Typography>
          {/* <Typography variant="body2">
            Note: &nbsp;
            {dropoffNote === undefined || dropoffNote === null ? '' : dropoffNote}
          </Typography> */}
          {/* <Typography variant="body2">
            Note: &nbsp;
            <TextField
              sx={textStyles}
              name="dropoffNote"
              margin="normal"
              defaultValue={dropoffNote === undefined || dropoffNote === null ? '' : dropoffNote}
              onChange={(e) => { handleNoteChange(e); }}
              disabled={!editMode}
              onMouseEnter={handleMouseover()}
              onMouseLeave={handleMouseout()}
              input={{
                endAdornment: mouseover ? (
                  <InputAdornment position="end">
                    <IconButton onClick={handleEditClick()}>
                      <Edit />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  ''
                )
              }}
            />
          </Typography> */}
          <Typography variant="body2">
            Category: &nbsp;
            {category === undefined || category === null ? 'Grocery' : category}
          </Typography>
        </Grid>
        <TableContainer component={Paper}>
          <Typography align="center" variant="body1">
            CART
          </Typography>
          <Table sx={{ margin: 'auto', minWidth: 450, maxWidth: 600 }} aria-label="cart items">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((items) => (
                <TableRow
                  key={items.item}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {items.item}
                  </TableCell>
                  <TableCell align="right">{items.quantity}</TableCell>
                  <TableCell align="right">{statusIcon(items.status)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={1}>Transportation</TableCell>
                <TableCell align="right">{transportation === undefined ? 'Car' : transportation}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Weight</TableCell>
                <TableCell align="right">{weight}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Size</TableCell>
                <TableCell align="right">{size}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ width: '80%', margin: 'auto', p: 3 }}>
            <Typography variant="body2">
              Request: &nbsp;
              {progressMessage(progress)}
            </Typography>
            <LinearProgressWithLabel value={progress} />
          </Box>
        </TableContainer>
        <Typography alignItems="right" variant="body1">
          Message to&nbsp;
          {runner ? runner.first_name : 'runner'}
          : &nbsp;
          {message}
        </Typography>
        {done ? 'Rating: ' : ''}
      </Grid>
    </Container>
  );
}

RequestStatus.propTypes = {
  user: PropTypes.string.isRequired,
  errands: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
};
