import React from 'react';
import ErrandCard from './ErrandCard.jsx'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const RunSummary = function(props) {
  const { run, user} = props;
  const { errands } = run.location;

  const errandCards = errands.map((errand) => (
    <ErrandCard
      declined={run.declinedErrands.includes(errand._id)}
      runId={run.id}
      errand={errand}
      key={errand._id}
      user={user}
      />
  ));

  return (
    <Grid container spacing={2} direction="column" justifyContent="space-between" padding="0.5em" height="100%">
      <Grid item container spacing={0.75} direction="row" alignItems="center" justifyContent="flex-start">
        <Grid item>
          <Typography variant="h5" fontWeight="600" color="secondary.dark">Run to </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" fontWeight="400" color="secondary.dark">{run.location.placeText}</Typography>
        </Grid>
      </Grid>

      <Grid item container flexWrap="nowrap" overflow="auto" minHeight="25vh" height="100%">
        {errandCards}
      </Grid>

      <Grid item>
        <Link to="/runnerStatus">
          <Button variant="contained">Run Details</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default RunSummary;