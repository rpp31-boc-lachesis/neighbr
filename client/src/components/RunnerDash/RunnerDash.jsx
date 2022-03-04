/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import wavyBuddyPoint from '../../assets/wavyBuddiesStanding.png';
import Run from './Run.jsx';
import AddRunModal from './AddRunModal.jsx';
import RunSummary from './RunSummary.jsx';

export default function RunnerDash(props) {
  const {
    runs, handlePostRun, user, refreshData, errands
  } = props;
  const [currentRun, setRun] = React.useState(null);
  let currentRuns = runs.filter((run) => !run.complete);

  let CurrentRuns = currentRuns.map((run) => <Run setRun={setRun} run={run} key={run._id} />);

  let completeRuns = runs.filter((run) => run.complete);

  let CompleteRuns = completeRuns.map((run) => <Run setRun={setRun} run={run} key={run._id} />);

  React.useEffect(() => {
    currentRuns = runs.filter((run) => !run.complete);

    CurrentRuns = currentRuns.map((run) => <Run setRun={setRun} run={run} key={run._id} />);

    completeRuns = runs.filter((run) => run.complete);

    CompleteRuns = completeRuns.map((run) => <Run setRun={setRun} run={run} key={run._id} />);
    runs.forEach((newRun) => {
      if (newRun !== null && currentRun !== null && newRun._id === currentRun._id) {
        setRun(newRun);
      }
    });
  }, [runs, errands]);

  return (
    <Container sx={{ height: '100%' }} maxwidth="sm">
      <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={4} columns={{ xs: 4, sm: 8, md: 12 }} maxHeight="80vh" paddingTop="1em" marginTop="15px" paddingBottom="0.5em" justifyContent="space-around" alignItems="stretch">
        <Grid container item direction="column" sx={{ minHeight: '100%', justifyContent: 'flex-end' }} xs={3} spacing={2}>
          <Grid item sx={{ alignSelf: 'flex-end' }}>
            <AddRunModal refreshData={refreshData} handlePostRun={handlePostRun} />
          </Grid>
          <Grid item>
            <img src={wavyBuddyPoint} height="465" width="234" alt="" />
          </Grid>
        </Grid>
        <Grid item container xs={4} sx={{ paddingBottom: '45px', maxHeight: '88vh', height: '100%' }}>

          <Grid
            item
            sx={{
              overflow: 'auto', maxHeight: '44vh', height: '44vh', width: '100%'
            }}
          >
            <Typography variant="h5">Current Runs</Typography>
            <Stack spacing={2}>
              {CurrentRuns}
            </Stack>
          </Grid>

          <Grid item sx={{ overflow: 'auto', maxHeight: '44vh', width: '100%' }}>
            <Typography variant="h5">Completed Runs</Typography>
            <Stack spacing={2}>
              {CompleteRuns}
            </Stack>
          </Grid>

        </Grid>
        <Grid item container xs={5} sx={{ paddingBottom: '45px', minHeight: '100%', overflow: 'auto' }} alignItems="flex-start">
          <Grid container item sx={{ minHeight: '50%', border: '2px solid', borderColor: 'secondary.main' }} flexGrow={1} marginTop="10px" borderRadius="4px" spacing={2}>
            {currentRun && <RunSummary refreshData={refreshData} user={user} run={currentRun} />}
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
