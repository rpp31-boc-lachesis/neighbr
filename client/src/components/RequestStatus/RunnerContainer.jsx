import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ReviewModal from './ReviewModal.jsx';
import ProfilePopover from '../Profile/ProfilePopover.jsx';

export default function RunnerContainer(props) {
  const {
    handleOpen, handleClose, runnerAvatar, runnerFullname, open, progress, setValue, value,
    setHover, hover, runnerUsername, setDone, setGivenRating, givenRating
  } = props;

  return (
    <Grid item xs={4}>
      <Box sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        m: 1,
        width: 150,
        height: 175
      }}
      >
        <Avatar variant="contained" alt={runnerFullname} src={runnerAvatar} sx={{ width: '80px', height: '80px' }} />
        <Typography variant="subtitle2">
          {runnerFullname}
        </Typography>
        {runnerUsername ? (
          <ProfilePopover user={runnerUsername} themeColor="secondary" />
        ) : ''}
        {givenRating > 0 ? <Rating name="runner-rating" value={givenRating} readOnly /> : (
          <Box>
            <Button variant="outlined" onClick={handleOpen}>Review Runner</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <ReviewModal
                progress={progress}
                setValue={setValue}
                setHover={setHover}
                value={value}
                hover={hover}
                runnerUsername={runnerUsername}
                setGivenRating={setGivenRating}
                setDone={setDone}
                givenRating={givenRating}
              />
            </Modal>
          </Box>
        )}
      </Box>
    </Grid>
  );
}

RunnerContainer.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  setDone: PropTypes.func.isRequired,
  setGivenRating: PropTypes.func.isRequired,
  setHover: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  runnerAvatar: PropTypes.string,
  runnerFullname: PropTypes.string,
  runnerUsername: PropTypes.string,
  hover: PropTypes.number,
  givenRating: PropTypes.number
};

RunnerContainer.defaultProps = {
  runnerAvatar: PropTypes.string,
  runnerFullname: PropTypes.string,
  runnerUsername: PropTypes.string,
  hover: PropTypes.number,
  givenRating: PropTypes.number
};
