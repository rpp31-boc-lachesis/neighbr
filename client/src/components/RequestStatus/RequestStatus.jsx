/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import LinearProgress from '@mui/material/LinearProgress';
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
  const [pickupData, setPickupData] = React.useState({});
  const [done, setDone] = React.useState(false);
  const [givenRating, setGivenRating] = React.useState(null);
  const [dropoff, setDropoff] = React.useState([{}]);
  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const [runnerFullname, setRunnerFullname] = React.useState('');
  const [runnerAvatar, setRunnerAvatar] = React.useState('');
  const [runnerUsername, setRunnerUsername] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cart = useLocation().state.req_items || [];
  const promisedBy = `${new Date(useLocation().state.end_time)}`;

  const {
    locations
  } = props;

  const {
    accepted, message, pickup, requester, size, weight, runner,
    transportation, category
  } = useLocation().state;

  const sx = {
    border: '2px solid #DE9DE9',
    borderRadius: '10px',
    maxWidth: '85%',
    margin: 'auto'
  };

  React.useEffect(() => {
    if (runner) {
      axios.get(`/user/${runner}`)
        .then((results) => {
          // console.log('RUNNER RESULTS: ', results.data[0]);
          setRunnerAvatar(results.data[0].avatar_url);
          setRunnerUsername(results.data[0].username);
          setRunnerFullname(`${results.data[0].first_name} ${results.data[0].last_name}`);
        })
        // .then(() => {
        //   console.log('runner avatar: ', runnerAvatar);
        //   console.log('runner username: ', runnerUsername);
        //   console.log('runner fullname: ', runnerFullname);
        // })
        .catch((err) => {
          console.error(err);
        });
    }

    setDropoff([{
      address: `${requester.street_address}, ${requester.city}, ${requester.state} ${requester.zip}`,
      coordinates: requester.coordinates
    }]);

    for (let i = 0; i < locations.length; i += 1) {
      if (locations[i]._id === pickup.locationId) {
        setPickupData(locations[i]);
      }
    }

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
  }, []);

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

  // console.log('outside', state)

  return (
    <Container fixed maxWidth="md" sx={{ pb: 10 }}>
      <Typography
        align="left"
        variant="subtitle1"
        sx={{
          p: 1, pl: 8, letterSpacing: 2, color: '#c463d5'
        }}
      >
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
        spacing={4}
        sx={sx}
      >
        <Grid item xs={4} justifyContent="flex-end">
          {accepted ? <RunnerContainer runnerAvatar={runnerAvatar} runnerFullname={runnerFullname} runnerUsername={runnerUsername} open={open} value={value} setValue={setValue} progress={progress} handleOpen={handleOpen} handleClose={handleClose} setHover={setHover} hover={hover} setGivenRating={setGivenRating} setDone={setDone} givenRating={givenRating} done={done} /> : <Typography variant="caption">No runner yet!</Typography>}
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Category: &nbsp;
          </Typography>
          <Typography variant="body2">
            {category === undefined || category === null ? 'Grocery' : category}
            &nbsp;
          </Typography>
          <Typography variant="h5">
            Pick-Up: &nbsp;
          </Typography>
          <Typography variant="overline">
            {pickupData.placeText}
            &nbsp;
          </Typography>
          <Typography variant="caption">
            {pickupData.address}
          </Typography>
          <Typography variant="h5">
            Drop-Off: &nbsp;
          </Typography>
          <Typography variant="caption">
            {dropoff[0].address || ''}
          </Typography>
          <Typography variant="body2">
            {dropoff[0].note === undefined ? '' : `Note: ${dropoff[0].note}` || ''}
          </Typography>
        </Grid>
        <TableContainer component={Paper}>
          <Typography align="center" variant="body1">
            &nbsp;
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
          {runner ? runnerUsername : 'runner'}
          : &nbsp;
          {message}
        </Typography>
        {done ? 'Rating: ' : ''}
      </Grid>
    </Container>
  );
}

RequestStatus.propTypes = {
  locations: PropTypes.array.isRequired,
};
