import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Destination(props) {
  const { dest } = props;
  const { destination, date, startTime, endTime, transportation } = dest;
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
        <Typography variant="h5">{`${destination} by: ${transportation}`}</Typography>
        <Typography variant="body2">{`Start: ${startTime} End: ${endTime}`}</Typography>
        <Typography variant="body2">{`Date: ${date}`}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add Destination</Button>
      </CardActions>
    </Card>
  );
}

Destination.propTypes = {
  dest: propTypes.shape({
    destination: propTypes.string.isRequired,
    date: propTypes.instanceOf(Date).isRequired,
    startTime: propTypes.instanceOf(Date).isRequired,
    endTime: propTypes.instanceOf(Date).isRequired,
    transportation: propTypes.string.isRequired,
  }).isRequired,
};
