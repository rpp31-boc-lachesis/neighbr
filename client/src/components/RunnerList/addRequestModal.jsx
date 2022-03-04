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

// import LocationAutocomplete from './LocationAutocomplete.jsx';
// import searchLocation from './searchLocation.js';

// import AddRunForm from './AddRunForm.jsx';

const style = {
  '& .MuiTextField-root': { mt: 1, mb: 1 },
};

export default function AddRequestModal(props) {
  // const [zip, setZip] = React.useState('');
  const [open, setOpen] = React.useState(false);
  // const [location, setLocation] = React.useState('');
  // const [date, setDate] = React.useState(new Date());
  // const [startTime, setStart] = React.useState(new Date());
  // const [stopTime, setStop] = React.useState(new Date());
  // const [transportation, setTransportation] = React.useState('');
  // const [proximity, setProximity] = React.useState(null);
  // const { handleRequestRun, refreshData } = props;
  // let Value;

  // React.useEffect(() => {
  //   if (zip.length >= 5) {
  //     searchLocation(zip, null, )
  //       .then((res) => res.data)
  //       .then((result) => {
  //         setProximity(result.features[0].center);
  //       })
  //       .catch((err) => { console.log(err); });
  //   }
  // }, [zip]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  // const handleLocChange = (value) => {
  //   setLocation(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

  //   const run = {
  //     date,
  //     startTime,
  //     endTime: stopTime,
  //     transportation,
  //   };
  //   handlePostRun(run, location)
  //     .then(() => {
        handleClose();
  //     })
  //     .then(() => {
  //       refreshData();
  //     });
  };

  // const handleZipChange = (e) => {
  //   setZip(e.target.value);
  // };

  return (
    <div>
      <LocalizationProvider dateAdapter={DateAdapter}>
      <Button variant="contained" onClick={handleOpen}>Request</Button>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>
            Enter Your Request
          </DialogTitle>
          <DialogContent sx={style}>
            form<br/><br/>

            info that goes here:<br/>
            accepted: false<br/>
            requester: from login<br/>
            runner: from runEntry<br/>
            req_items: form<br/>
              item: form<br/>
              quantity: form<br/>
              status: ?<br/>
            weight: form string<br/>
            size: pulldown string<br/>
            transportation: from runEntry<br/>
            message: form string<br/>
            pickup: from runEntry<br/>
            dropoff: either user current address or enter address<br/>
            date: current date<br/>
            start_time: from runEntry? fill on accept?<br/>
            end_time: from runEntry? fill on accept?<br/>
            given rating:<br/>
                runner: from runEntry<br/>
                rating: number  null?<br/>
            {/* <TextField
              required
              fullWidth
              id="zip"
              label="Zip code"
              value={zip}
              onChange={handleZipChange}
            />
            <LocationAutocomplete proximity={proximity} handleLocChange={handleLocChange} />
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
            /> */}
          </DialogContent>
          <DialogActions>
            {/* <Button variant="contained">Submit Run</Button> */}
            <Button onClick={handleSubmit} variant="contained">Submit Run</Button>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </div>
  );
}

/*
const errandSchema = Schema({
  category: String,
  accepted: { type: Boolean, default: false },
  requester: { type: Schema.Types.ObjectId, ref: 'User' },
  runner: { type: Schema.Types.ObjectId, ref: 'User' },
  run: { type: Schema.Types.ObjectId, ref: 'Run' },
  req_items: [
    {
      item: String,
      quantity: Number,
      status: String // ['Cancelled', 'In-Progress', 'Completed']
    },
  ],
  weight: String,
  size: String,
  transportation: String,
  message: String,
  pickup: {
    store: String,
    address: String,
    locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
  },
  dropoff: {
    address: String,
    note: String,
    locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  given_rating: {
    runner: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: Number
  },
});
*/