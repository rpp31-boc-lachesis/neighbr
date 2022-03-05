import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ReviewModal from './ReviewModal.jsx';
import ProfilePopover from '../Profile/ProfilePopover.jsx';

export default function RunnerContainer(props) {
  const {
    handleOpen, handleClose, runner, open, progress, setValue, value, setHover, hover,
    runnerUsername
  } = props;
  console.log('ML props', props)
  console.log('ML runner', runner)
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
        <Avatar variant="contained" alt="Haylie Schleifer" src={runner.avatar_url} sx={{ width: '80px', height: '80px' }} />
        <Typography variant="subtitle2">
          {runner.first_name}
          &nbsp;
          {runner.last_name}
        </Typography>
        <ProfilePopover user={runner.username} themeColor='primary' />
        <Button variant="outlined" onClick={handleOpen}>Review Runner</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ReviewModal
            progress={progress}
            setValue={setValue}
            setHover={setHover}
            value={value}
            hover={hover}
            runnerUsername={runnerUsername}
          />
        </Modal>
      </Box>
    </Grid>
  );
}
