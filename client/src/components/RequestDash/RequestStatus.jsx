/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import LinearProgress from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';
import Modal from '@mui/material/Modal';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import RequestMap from './RequestMap.jsx';
import testData from './requestTestData.js';
import ProfilePopover from '../Profile/ProfilePopover.jsx';
import ProfileCard from '../Profile/ProfileCard.jsx';

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

export default function RequestStatus() {
  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const initialValue = 0;
    const total = testData[0].reqItems.map((item) => (item.status !== 'Cancelled')).reduce((a, b) => a + b, initialValue) * 100;
    let accum = 0;

    for (let i = 0; i < testData[0].reqItems.length; i += 1) {
      if (testData[0].reqItems[i].status === 'Cancelled') {
        accum += 0;
      } else if (testData[0].reqItems[i].status === 'In-Progress') {
        accum += 50;
      } else if (testData[0].reqItems[i].status === 'Completed') {
        accum += 100;
      }
    }

    const result = (accum / total) * 100;
    setProgress(result);
  });

  // set pickup/dropoff points using getLocationById (after a post request saves location in db)

  const modalsx = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const sx = {
    border: '2px solid #DE9DE9',
    borderRadius: '10px'
  };

  function createData(item, quantity, status) {
    return {
      item, quantity, status
    };
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

  const {
    category, weight, size, transportation, message, reqItems
  } = testData[0];

  const shop = testData[0].pickup.store;
  const endTime = testData[0].end_time.toString();
  const pickup = testData[0].pickup.address;
  const dropoff = testData[0].dropoff.address;
  const dropoffNote = testData[0].dropoff.note;

  const rows = reqItems.map((cart) => createData(cart.item, cart.quantity, cart.status));

  return (
    <Container fixed sx={{ pb: 10 }}>
      <Typography display="block" align="left" variant="subtitle1">
        Request: &nbsp;
        {shop}
      </Typography>
      <RequestMap />
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
        <Grid item sx={{ m: 1 }}>{endTime}</Grid>
      </Grid>
      <Typography display="block" align="justify" variant="h6">Errand Details</Typography>
      <Grid
        container
        sx={{
          border: '2px solid #DE9DE9',
          borderRadius: '10px',
        }}
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
            <Avatar variant="contained" alt="Haylie Schleifer" src="https://s3-alpha-sig.figma.com/img/3af9/cdaf/deb44c5856c64700478bf852a42f0b39?Expires=1646611200&Signature=Mkz~SUB643eX761qAVY5r6pA5gFF9RODGQtquTaR4P5q4ECxMXVSlHLmJfYRJ1qmnnDsl6Uf6273iyds5GPfNQUMyNF6k52Sfnr1mPbjCteQkmsfz3iTc4zNO5iCCQTANNDDLifTdLWbrUZH4Jl-43hiiUtjrwLLZt-eSK-zTb302ABjt3Pjxd9GL1egctfIz8iNAkHX0dYoe-gpdlspFg-8zDobFdft7KTVPYy0XtmS-pSSAXUKIf8fqt-2Q~1v0ROIOv7zoZo1jjYvcIlfkRnJmZZOlJlS-B4ooqFgH1EetTW52xcXtRB3xhX54XiX~cj9jWfkge1s8~CkXNrD4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" sx={{ width: '80px', height: '80px' }} />
            <Typography variant="subtitle2">
              Haylie Schleifer
            </Typography>
            <ProfilePopover>
              <ProfileCard handleClose={handleClose} user="organicrabbit525" />
            </ProfilePopover>
            {/* <Button variant="outlined">View Profile</Button> */}
            <Button variant="outlined" onClick={handleOpen}>Review Runner</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalsx}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Rating
                </Typography>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
            </Modal>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Pick-Up:
          </Typography>
          <Typography variant="overline">
            {shop}
            &nbsp;
          </Typography>
          <Typography variant="caption">
            {pickup}
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
            {category}
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
              {rows.map((row) => (
                <TableRow
                  key={row.item}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.item}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{statusIcon(row.status)}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={1}>Transportation</TableCell>
                <TableCell align="right">{transportation}</TableCell>
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
            <Typography variant="body2">Progress: </Typography>
            <LinearProgressWithLabel value={progress} />
          </Box>
        </TableContainer>
        <Typography alignItems="right" variant="body1">
          Message to Haylie: &nbsp;
          {message}
        </Typography>
      </Grid>
    </Container>
  );
}
