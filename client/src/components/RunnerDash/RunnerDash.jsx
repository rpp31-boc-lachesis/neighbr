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
import Run from './Run.jsx';
import AddRunModal from './AddRunModal.jsx';
import RunSummary from './RunSummary.jsx';

export default function RunnerDash(props) {
  const { runs, handlePostRun, errands, user, refreshData } = props;

  const [currentRun, setRun] = React.useState(null);

  const CurrentRuns = runs.map((run) => {
    if (run.user.username === user && !run.complete) {
      return <Run setRun={setRun} run={run} key={run._id} />;
    }
  });

  const CompleteRuns = runs.map((run) => {
    if (run.user.username === user && run.complete) {
      return <Run setRun={setRun} run={run} key={run._id} />;
    }
  });

  return (
    <Container sx={{ height: '100%' }} maxwidth="sm">
      <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={4} columns={{ xs: 4, sm: 8, md: 12 }} maxHeight="80vh" paddingTop="1em" marginTop="15px" paddingBottom="0.5em" justifyContent="space-around" alignItems="stretch">
        <Grid container item direction="column" sx={{ minHeight: '100%'}} xs={3} spacing={2}>
          <Grid item sx={{ alignSelf: 'flex-end' }}>
            <AddRunModal refreshData={refreshData} handlePostRun={handlePostRun} />
          </Grid>
          <Grid item>
            <img src={wavyBuddyPoint} height="465" width="234" alt="" />
          </Grid>
        </Grid>
        <Grid item container xs={4} sx={{ paddingBottom: '45px', maxHeight: '88vh', height: '100%' }}>

          <Grid item sx={{ overflow: 'auto', maxHeight: '44vh' }}>
            <Typography variant="h5">Current Runs</Typography>
            <Stack spacing={2}>
              {CurrentRuns}
            </Stack>
          </Grid>

          <Grid item sx={{ overflow: 'auto', maxHeight: '44vh' }}>
            <Typography variant="h5">Completed Runs</Typography>
            <Stack spacing={2}>
              {CompleteRuns}
            </Stack>
          </Grid>

        </Grid>
        <Grid item container xs={5} sx={{ paddingBottom: '45px', minHeight: '100%', overflow: 'auto' }} alignItems="flex-start">
          <Grid container item sx={{ minHeight: '50%', border: '2px solid', borderColor: 'secondary.main'}} flexGrow={1} marginTop="10px" borderRadius="4px" spacing={2}>
            {currentRun && <RunSummary run={currentRun} />}
          </Grid>
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
