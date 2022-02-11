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
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h4">{`${destination} by: ${transportation}`}</Typography>
        <Typography variant="body">{`Start: ${startTime} End: ${endTime}`}</Typography>
        <Typography variant="body">{`Date: ${date}`}</Typography>
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
    date: propTypes.string.isRequired,
    startTime: propTypes.string.isRequired,
    endTime: propTypes.string.isRequired,
    transportation: propTypes.string.isRequired,
  }).isRequired,
};
