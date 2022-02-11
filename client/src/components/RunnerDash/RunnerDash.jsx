import React from 'react';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import wavyBuddyPoint from '../../assets/wavyBuddiesStanding.png';
import Destination from './Destination.jsx';

export default function RunnerDash(props) {
  const { destinations } = props;
  const Destinations = destinations.map((dest, index) => <Destination dest={dest} key={dest.id} />);
  return (
    <Container maxwidth="sm">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={4}>
          <Container
            maxwidth="sm"
          >
            <Button variant="contained">Post New Run</Button>
            <img src={wavyBuddyPoint} alt="" />
          </Container>
        </Grid>
        <Grid item xs={6}>
          Current Runs
          <Stack spacing={2}>
            {Destinations}
          </Stack>
        </Grid>
        <Grid item>
          <Paper>Right</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
RunnerDash.propTypes = {
  destinations: propTypes.arrayOf(
    propTypes.shape(
      {
        destination: propTypes.string.isRequired,
        date: propTypes.instanceOf(Date).isRequired,
        startTime: propTypes.instanceOf(Date).isRequired,
        endTime: propTypes.instanceOf(Date).isRequired,
        transportation: propTypes.string.isRequired,
      }
    )
  ).isRequired
};
