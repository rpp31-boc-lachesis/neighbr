/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ErrandCard from './ErrandCard.jsx';

const RunSummary = function(props) {
  const { run, user, refreshData } = props;
  const { errands } = run.location;

  const currentErrands = errands.filter((errand) => !run.declinedErrands.includes(errand._id));
  let errandCards = currentErrands.map((errand) => (
    <ErrandCard
      refreshData={refreshData}
      runId={run._id}
      errand={errand}
      key={errand._id}
      user={user}
    />
  ));

  React.useEffect(() => {
    errandCards = currentErrands.map((errand) => (
      <ErrandCard
        refreshData={refreshData}
        runId={run._id}
        errand={errand}
        key={errand._id}
        user={user}
      />
    ));
  }, [props]);

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
