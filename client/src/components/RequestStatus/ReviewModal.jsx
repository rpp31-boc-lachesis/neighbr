import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function ReviewModal(props) {
  // const [givenRating, setGivenRating] = React.useState(0);
  const {
    runnerUsername, progress, value, setValue, hover, setHover, setGivenRating, setDone, givenRating
  } = props;

  // update on first click
  function updateRating(givenRating) {
    axios.put('/users/rate', { user: runnerUsername, givenRating })
      .then((result) => {
        console.log('updated rating: ', result);
      })
      .catch((err) => console.log(err));
  }

  const modalsx = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const labels = {
    0.5: 'Terrible',
    1: 'Terrible+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Average',
    3: 'Average+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  if (progress === 100 && givenRating === null) {
    return (
      <Box sx={modalsx}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Rating
        </Typography>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          onClick={(e) => { setGivenRating(e.target.value); setDone(true); }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      </Box>
    );
  }

  if (givenRating > 0) {
    return (
      <Box sx={modalsx}>
        <Typography variant="subtitle">
          Rated: &nbsp;
          {givenRating}
        </Typography>
      </Box>
    );
  }

  if (givenRating === null) {
    return (
      <Box sx={modalsx}>
        <Typography variant="subtitle">
          Errand is still in progress.
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={modalsx}>
      <Typography variant="subtitle">
        Thank you for your review!
      </Typography>
    </Box>
  );
}
