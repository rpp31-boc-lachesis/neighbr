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

export default function AddRunForm(props) {
  const [destination, setDestination] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStart] = React.useState(new Date());
  const [stopTime, setStop] = React.useState(new Date());
  const [transportation, setTransportation] = React.useState('')

  const { handlePostRun } = props;

  const handleDestChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = () => {
    console.log('click')
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
    <Box component="form">
      <Typography variant="h5" sx={{color: 'secondary.main'}}>Enter your Run</Typography>
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
      <Button onClick={handleSubmit} variant="contained">Submit Run</Button>
    </Box>
  );
}
