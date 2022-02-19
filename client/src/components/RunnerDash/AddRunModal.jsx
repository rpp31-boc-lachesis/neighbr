import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDayjs';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LocationAutocomplete from './LocationAutocomplete.jsx';

import searchLocation from './searchLocation.js';

// import AddRunForm from './AddRunForm.jsx';

const style = {
  '& .MuiTextField-root': { mt: 1, mb: 1 },
};

export default function AddRunModal(props) {
  const [zip, setZip] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [destination, setDestination] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStart] = React.useState(new Date());
  const [stopTime, setStop] = React.useState(new Date());
  const [transportation, setTransportation] = React.useState('');
  const [proximity, setProximity] = React.useState(null)
  const { handlePostRun } = props;
  let proximityValue;

  React.useEffect(() => {
    if (zip.length >= 5) {
      searchLocation(zip, null)
        .then((res) => res.json())
        .then((result) => {
          console.log(result.features[0].center);
          setProximity(result.features[0].center);
        })
        .catch((err) => { console.log(err) });
    }
  }, [zip]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleDestChange = (value) => {
    setDestination(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const run = {
      date,
      startTime,
      stopTime,
      transportation,
    };
    handlePostRun(run, destination);
    handleClose();
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Button variant="contained" onClick={handleOpen}>Post New Run</Button>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>
            Enter Your Run
          </DialogTitle>
          <DialogContent sx={style}>
            <TextField
              required
              fullWidth
              id="zip"
              label="Zip code"
              value={zip}
              onChange={handleZipChange}
            />
            <LocationAutocomplete proximity={proximity} handleDestChange={handleDestChange} />
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} variant="contained">Submit Run</Button>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </div>
  );
}

AddRunModal.propTypes = {
  handlePostRun: PropTypes.func.isRequired,
};
