import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function ReviewModal(props) {
  // const [givenRating, setGivenRating] = React.useState(0);
  const {
    runnerUsername, progress, setHover, setValue, value, hover
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
    0.5: 'Poor',
    1: 'Poor+',
    1.5: 'Average',
    2: 'Average+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Great',
    4: 'Great+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  if (progress === 100) {
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
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    );
  }
  return (
    <Box sx={modalsx}>
      <Typography variant="subtitle">
        Errand is still in progress.
      </Typography>
    </Box>
  );
}
