import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import wavyBuddyPoint from '../../assets/wavyBuddiesStanding.png';
import Destination from './Destination.jsx';
import AddRunModal from './AddRunModal.jsx';

export default function RunnerDash(props) {
  const { runs, handlePostRun } = props;
  const Destinations = runs.map((dest, index) => <Destination dest={dest} key={dest.id} />);
  return (
    <Container maxwidth="sm">
      <Grid container sx={{flexGrow: 1, height: '100%'}} justifyContent="center" alignItems="center" spacing={2}>
        <Grid container item direction="column" sx={{ minHeight: '100%' }} xs={3}>
          {/* <Container
            maxwidth="sm"
          > */}
          <AddRunModal handlePostRun={handlePostRun} />
          <img src={wavyBuddyPoint} alt="" />
          {/* </Container> */}
        </Grid>
        <Grid item xs={4} sx={{overflow: 'scroll'}}>
          <Typography variant="h5">Current Runs</Typography>
          <Stack spacing={2}>
            {Destinations}
          </Stack>
        </Grid>
        <Grid item xs={5} sx={{ height: '100%' }}>
          <Box sx={{ minHeight: '100%', minWidth: '100%', border: '1px solid black', borderRadius: '2px' }}>
            <Link to="/runnerStatus">
              <Button variant="contained">Details</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
// RunnerDash.propTypes = {
//   runs: propTypes.arrayOf(
//     propTypes.shape(
//       {
//         destination: propTypes.string.isRequired,
//         date: propTypes.instanceOf(Date).isRequired,
//         startTime: propTypes.instanceOf(Date).isRequired,
//         endTime: propTypes.instanceOf(Date).isRequired,
//         transportation: propTypes.string.isRequired,
//       }
//     )
//   ).isRequired
// };
