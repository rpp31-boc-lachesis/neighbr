import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDayjs';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddRunForm from './AddRunForm.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1 },
};

export default function AddRunModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [destination, setDestination] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStart] = React.useState(new Date());
  const [stopTime, setStop] = React.useState(new Date());
  const [transportation, setTransportation] = React.useState('');

  const { handlePostRun } = props;

  const handleDestChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = () => {
    console.log('click');
    const run = {
      destination,
      date,
      startTime,
      stopTime,
      transportation,
    };
    handlePostRun(run);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Post New Run</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // sx={{ '.MuiBox-root': { borderRadius: '4px' } }}
      >
        <DialogTitle>
          Enter Your Run
        </DialogTitle>
        <DialogContent>
          <Box sx={style}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <TextField
                required
                fullWidth
                id="destination"
                label="Destination"
                value={destination}
                autoComplete="off"
                onChange={handleDestChange}
              />
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
              />
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => setStart(newValue)}
                renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
              />
              <TimePicker
                label="Stop Time"
                value={stopTime}
                onChange={(newValue) => setStop(newValue)}
                renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
              />
              <TextField
                required
                fullWidth
                label="Transportation"
                value={transportation}
                onChange={(e) => setTransportation(e.target.value)}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">Submit Run</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
