import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Run(props) {
  const { run } = props;
  const { location, date, startTime, endTime, transportation } = run;
  return (
    <Card
      elevation={4}
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        '&:hover': {
          bgcolor: 'secondary.light'
        }
      }}
    >
      <CardContent>
        <Grid>
          <Typography variant="h5">{`${location} by: ${transportation}`}</Typography>
          <Typography variant="body2">{`Start: ${startTime} End: ${endTime}`}</Typography>
          <Typography variant="body2">{`Date: ${date}`}</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add Destination</Button>
      </CardActions>
    </Card>
  );
}

Run.propTypes = {
  run: propTypes.shape({
    location: propTypes.string.isRequired,
    date: propTypes.instanceOf(Date).isRequired,
    startTime: propTypes.instanceOf(Date).isRequired,
    endTime: propTypes.instanceOf(Date).isRequired,
    transportation: propTypes.string.isRequired,
  }).isRequired,
};
