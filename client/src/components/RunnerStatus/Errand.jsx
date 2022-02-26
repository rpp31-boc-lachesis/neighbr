import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

export default function Errand(props) {
  const {
    type,
    stateIndex,
    errandObj,
    onRequestAccept,
    onRequestDeny,
    onErrandComplete
  } = props;
  const { _id: errandID, category, req_items: reqItems } = errandObj;
  const { requester } = reqItems;

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
            {category}
          </Typography>
          <Typography
            color="#898989"
            item
            id="RequesterName"
          >
            {requester}
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
          type === 'NewRequest'
          && (
            <>
              <Button
                onClick={() => onRequestAccept(errandObj)}
                sx={{ borderRadius: 4 }}
                item
                variant="contained"
                color="info"
              >
                Accept
              </Button>
              <Button
                onClick={() => onRequestDeny(errandObj)}
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
          type === 'AcceptedErrand'
          && (
            <Button
              onClick={() => onErrandComplete(errandID, stateIndex)}
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
  stateIndex: PropTypes.number.isRequired,
  errandObj: PropTypes.shape({
    _id: PropTypes.string,
    category: PropTypes.string,
    accepted: PropTypes.bool,
    requester: PropTypes.string,
    runner: PropTypes.string,
    run: PropTypes.string,
    req_items: PropTypes.arrayOf(PropTypes.shape({
      item: PropTypes.string,
      quantity: PropTypes.number,
      status: PropTypes.string
    })),
    weight: PropTypes.string,
    size: PropTypes.string,
    transportation: PropTypes.string,
    message: PropTypes.string,
    pickup: PropTypes.shape({
      store: PropTypes.string,
      address: PropTypes.string,
      locationId: PropTypes.string,
    }),
    dropoff: PropTypes.shape({
      address: PropTypes.string,
      note: PropTypes.string,
      locationId: PropTypes.string,
    }),
    date: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    given_rating: PropTypes.shape({
      runner: PropTypes.string,
      rating: PropTypes.number
    }),
  }).isRequired,
  onRequestAccept: PropTypes.func,
  onRequestDeny: PropTypes.func,
  onErrandComplete: PropTypes.func
};

Errand.defaultProps = {
  onRequestAccept: () => {},
  onRequestDeny: () => {},
  onErrandComplete: () => {}
};
