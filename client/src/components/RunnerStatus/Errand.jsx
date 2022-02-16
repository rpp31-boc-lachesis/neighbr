import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function Errand(props) {
  return (
    <Grid
      sx={{
        height: '15vh'
      }}
      id="NewRequest"
      item
      container
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid
        container
        direction="column"
        item
        justifyContent="space-between"
        sx={{
          bgcolor: 'primary.light',
          border: 1,
          borderColor: 'primary.main',
          borderRadius: 4,
          height: '100%',
          width: '70%'
        }}
      >
        <Grid
          color="#FFFFFF"
          container
          justifyContent="space-between"
          direction="row"
          width="100%"
          padding="7px"
        >
          <Typography
            variant="h4"
            item
            id="ErrandName"
          >
            {props.errandName}
          </Typography>
          <Typography
            color="#898989"
            item
            id="RequesterName"
          >
            {props.requesterName}
          </Typography>
        </Grid>
        <Grid
          color="#FFFFFF"
          container
          justifyContent="space-between"
          direction="row"
          width="100%"
          padding="7px"
        >
          <Grid item>
            <Typography
              item
              id="ErrandDetails"
            >
              Errand Details
            </Typography>
          </Grid>
          <Typography
            item
            id="TimeDistanceDetails"
          >
            Time/Distance Details
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent="space-around"
        direction="column"
        width="20%"
        height="100%"
      >
        {
          props.type === 'NewRequest' &&
          (
          <>
            <Button
              sx={{ borderRadius: 4 }}
              item
              variant="contained"
              color="info"
            >
              Accept
            </Button>
            <Button
              sx={{ borderRadius: 4 }}
              item
              disableElevation
              variant="contained"
              color="info"
            >
              Deny
            </Button>
          </>
          )
        }
        {
          props.type === 'AcceptedRequest' &&
          (
            <Button
              sx={{ borderRadius: 4 }}
              item
              disableElevation
              variant="contained"
              color="success"
            >
              Complete
            </Button>
          )
        }
      </Grid>
    </Grid>
  );
}

Errand.propTypes = {
  type: PropTypes.string.isRequired,
  errandName: PropTypes.string.isRequired,
  requesterName: PropTypes.string.isRequired,
  // errandDetails: PropTypes.object.isRequired,
  // timeDistanceDetails: PropTypes.object.isRequired,
};