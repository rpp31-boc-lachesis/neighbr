import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import RequestMap from './RequestMap.jsx';
import testData from './requestTestData.js';

class RequestStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // set pickup/dropoff points using getLocationById (after a post request saves location in db)

  render() {
    const sx = {
      border: '2px solid #DE9DE9',
      borderRadius: '10px'
    };

    function createData(item, quantity, status) {
      return {
        item, quantity, status
      };
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
      <Container fixed>
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
          sx={sx}
        >
          <Grid item xs={4} direction="right">
            <Box sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              m: 1,
              width: 135,
              height: 135
            }}
            >
              <Avatar variant="contained" alt="Haylie Schleifer" src="https://s3-alpha-sig.figma.com/img/3af9/cdaf/deb44c5856c64700478bf852a42f0b39?Expires=1646611200&Signature=Mkz~SUB643eX761qAVY5r6pA5gFF9RODGQtquTaR4P5q4ECxMXVSlHLmJfYRJ1qmnnDsl6Uf6273iyds5GPfNQUMyNF6k52Sfnr1mPbjCteQkmsfz3iTc4zNO5iCCQTANNDDLifTdLWbrUZH4Jl-43hiiUtjrwLLZt-eSK-zTb302ABjt3Pjxd9GL1egctfIz8iNAkHX0dYoe-gpdlspFg-8zDobFdft7KTVPYy0XtmS-pSSAXUKIf8fqt-2Q~1v0ROIOv7zoZo1jjYvcIlfkRnJmZZOlJlS-B4ooqFgH1EetTW52xcXtRB3xhX54XiX~cj9jWfkge1s8~CkXNrD4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" sx={{ width: '80px', height: '80px' }} />
              <Typography variant="subtitle2">
                Haylie Schleifer
              </Typography>
              <Button variant="outlined">View Profile</Button>
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
            <Typography align="center">
              Cart:
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
                    <TableCell align="right">{row.status === 'Declined' ? <Tooltip title="Declined"><CloseIcon /></Tooltip> : row.status}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell>Transportation</TableCell>
                  <TableCell align="right">{transportation}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={1}>Total Weight</TableCell>
                  <TableCell align="right">{weight}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Size</TableCell>
                  <TableCell align="right">{size}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography alignItems="right" variant="body2">
            Message to Haylie: &nbsp;
            {message}
          </Typography>
        </Grid>
      </Container>
    );
  }
}

export default RequestStatus;
