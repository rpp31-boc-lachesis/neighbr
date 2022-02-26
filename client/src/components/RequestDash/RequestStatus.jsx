/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
import RequestMap from './RequestMap.jsx';
import ReviewModal from './ReviewModal.jsx';
import ProfilePopover from '../Profile/ProfilePopover.jsx';

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
  const [promisedBy, setPromisedBy] = React.useState(null);
  const [pickup, setPickup] = React.useState({});
  const [transportation, setTransportation] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [size, setSize] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [dropoff, setDropoff] = React.useState(null);
  const [dropoffNote, setDropoffNote] = React.useState(null);
  const [runner, setRunner] = React.useState({});
  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = props;

  React.useEffect(() => {
    const testID = '621938d8d4cc29017923cb73';
    // `/requestStatus/${ [selected errand id] }`
    axios.get(`/users/${user}`)
      .then((results) => {
        const dropoffAddress = `${results.data[0].street_address}, ${results.data[0].city}, ${results.data[0].state} ${results.data[0].zip}`;
        setDropoff(dropoffAddress);
      })
      .catch((err) => {
        console.error(err);
      });

    axios.get(`/requestStatus/${testID}`)
      .then((results) => {
        axios.get(`/user/${results.data.runner}`)
          .then((result) => {
            console.log('runner: ', result.data);
            setRunner(result.data[0]);
          })
          .catch((err) => {
            console.error(err);
          });

        const progressTotal = results.data.req_items.map((item) => (item.status !== 'Cancelled')).reduce((a, b) => a + b, 0) * 100;

        let accum = 0;

        for (let i = 0; i < results.data.req_items.length; i += 1) {
          if (results.data.req_items[i].status === 'Cancelled') {
            accum += 0;
          } else if (results.data.req_items[i].status === 'In-Progress') {
            accum += 50;
          } else if (results.data.req_items[i].status === 'Completed') {
            accum += 100;
          }
        }

        const result = (accum / progressTotal) * 100;
        setProgress(result);

        const endTime = `${new Date(results.data.end_time)}`;
        setPromisedBy(endTime);
        setCart(results.data.req_items);
        setTransportation(results.data.transportation);
        setWeight(results.data.weight);
        setSize(results.data.size);
        setCategory(results.data.category);
        setMessage(results.data.message);
        setRunner(results.data.runner);
        setDropoffNote(results.data.dropoff.note);

        return results.data.pickup.locationId;
      })
      .then((locationID) => {
        axios.get(`/locations/${locationID}`)
          .then((results) => {
            setPickup(results.data);
            console.log('pickup: ', results.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const sx = {
    border: '2px solid #DE9DE9',
    borderRadius: '10px',
    maxWidth: '85%',
    margin: 'auto'
  };

  function progressMessage(percentage) {
    if (percentage === 0) {
      return 'Not Started';
    }
    if (percentage < 100) {
      return 'In Progress';
    }
    return 'Completed';
  }

  function statusIcon(status) {
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
        {pickup.placeText}
      </Typography>
      <RequestMap pickup={pickup.coordinates || [0, 0]} />
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
      {/* {runner === {} ? 'Errand not accepted yet' : (

      )} */}
      <Grid
        container
        sx={sx}
      >
        <Grid item xs={4}>
          <Box sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            m: 1,
            width: 150,
            height: 175
          }}
          >
            <Avatar variant="contained" alt="Haylie Schleifer" src={runner.avatar_url} sx={{ width: '80px', height: '80px' }} />
            <Typography variant="subtitle2">
              {runner.first_name}
              &nbsp;
              {runner.last_name}
            </Typography>
            <ProfilePopover user={runner.username || ''} />
            <Button variant="outlined" onClick={handleOpen}>Review Runner</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ReviewModal
                progress={progress}
                setValue={setValue}
                setHover={setHover}
                value={value}
                hover={hover}
              />
            </Modal>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Pick-Up:
          </Typography>
          <Typography variant="overline">
            {pickup.placeText}
            &nbsp;
          </Typography>
          <Typography variant="caption">
            {pickup.address}
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
            Note: &nbsp;
            {dropoffNote}
          </Typography>
          <Typography variant="body2">
            Category: &nbsp;
            {category === undefined ? 'Not Specified' : category}
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
                <TableCell align="right">{transportation === undefined ? 'Not Specified' : transportation}</TableCell>
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
          {runner.first_name}
          : &nbsp;
          {message}
        </Typography>
      </Grid>
    </Container>
  );
}
