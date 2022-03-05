import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

import LocationAutocomplete from '../RunnerDash/LocationAutocomplete.jsx';
import searchLocation from '../RunnerDash/searchLocation.js';

// import AddRunForm from './AddRunForm.jsx';

const style = {
  '& .MuiTextField-root': { mt: 1, mb: 1 },
};

export default function AddRequestModal(props) {
  const {run} = props
  const {startTime, endTime } = run
  console.log(run)

  const [open, setOpen] = React.useState(false);

  const [item, setItem] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [size, setSize] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [pickup, setPickup] = React.useState(''); // use locationId
  const [dropoff, setDropoff] = React.useState('') // use address thing
  const [date, setDate] = React.useState(new Date());
  // const [startTime, setStart] = React.useState(startTime);
  // const [endTime, setEnd] = React.useState(endTime);
  const [requester, setRequester] = React.useState(''); // use current user

  const [zip, setZip] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [proximity, setProximity] = React.useState(null);
  // const { handlePostErrand, refreshData } = props;
  // let Value;

  React.useEffect(() => {
    if (zip.length >= 5) {
      searchLocation(zip, null, )
        .then((res) => res.data)
        .then((result) => {
          setProximity(result.features[0].center);
        })
        .catch((err) => { console.log(err); });
    }
  }, [zip]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleLocChange = (value) => {
    setLocation(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errand = {
      category: '',
      accepted: false,
      requester: { type: Schema.Types.ObjectId, ref: 'User' },
      runner: { type: Schema.Types.ObjectId, ref: 'User' },
      run: { type: Schema.Types.ObjectId, ref: 'Run' },
      req_items: [
        {
          item: String,
          quantity: Number,
          status: null // ['Cancelled', 'In-Progress', 'Completed']
        },
      ],
      weight: weight,
      size: size,
      transportation: transportation,
      message: message,
      pickup: {
        store: String,
        address: String,
        locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
      },
      dropoff: {
        address: '',
        note: '',
        locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
      },
      date: date,
      start_time: startTime,
      end_time: endTime,
      given_rating: {
        runner: { type: Schema.Types.ObjectId, ref: 'User' },
        rating: null
      },
    };
    handlePostErrand(errand, location) //location?
      .then(() => {
        handleClose();
      })
      .then(() => {
        refreshData();
      });
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

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
            {/* form<br/><br/>

            info that goes here:<br/>
            req_items: form<br/>
              item: form<br/>
              quantity: form<br/>
            weight: form string<br/>
            size: pulldown string<br/>
            message: form string<br/>
            dropoff: either user current address or enter address<br/> */}
            <TextField
              required
              fullWidth
              label="Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="zip"
              label="Zip code"
              value={zip}
              onChange={handleZipChange}
            />
            <LocationAutocomplete proximity={proximity} handleLocChange={handleLocChange} />
          </DialogContent>
          <DialogActions>
            {/* <RouterLink style={{ textDecoration: 'none' }} to="/requestStatus"> */}

            <Button onClick={handleSubmit} variant="contained">Submit Request</Button>
            {/* </RouterLink> */}
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