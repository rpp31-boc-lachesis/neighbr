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
  const { run } = props
  const { startTime, endTime, transportation, _id, user, location} = run
  // console.log('addRequesetModal', run)

  const [open, setOpen] = React.useState(false);

  const [item, setItem] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [size, setSize] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [pickup, setPickup] = React.useState(''); // use locationId
  const [dropoff, setDropoff] = React.useState('') // use address thing
  const [note, setNote] = React.useState('') // use address thing
  const [date, setDate] = React.useState(new Date());
  // const [startTime, setStart] = React.useState(startTime);
  // const [endTime, setEnd] = React.useState(endTime);
  const [requester, setRequester] = React.useState(''); // use current user

  const [zip, setZip] = React.useState('');
  // const [location, setLocation] = React.useState(''); //this location is the pickup, not dropoff
  const [proximity, setProximity] = React.useState(null);
  const { handlePostErrand, refreshData } = props;
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
    setDropoff(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errand = {
      category: '',
      accepted: false,
      requester: '', //fill in App
      runner: user._id,
      run: _id,
      req_items: [
        {
          item,
          quantity,
          status: 'Pending' // ['Pending', 'Cancelled', 'In-Progress', 'Completed']
        },
      ],
      weight,
      size,
      transportation,
      message,
      pickup: {
        store: location.placeText,
        address: location.address,
        locationId: location._id,
      },
      dropoff: {
        address: dropoff, //fill with new. if empty, then fill in app
        note,
        // locationId: { type: mongoose.Types.ObjectId, ref: 'Location' },
      },
      date,
      start_time: startTime,
      end_time: endTime,
      // given_rating: {
      //   runner: 'runnerName',
      //   rating: null
      // },
    };
    console.log(errand)  //testing
    handlePostErrand(errand) //location?
      // .then(() => {
        handleClose();
      // })
      // .then(() => {
        refreshData();
      // });
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
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
            <TextField
              fullWidth
              label="Drop-off Address"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
            <TextField
              fullWidth
              label="Delivery Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <RouterLink style={{ textDecoration: 'none' }}
            // to="/requestStatus"
            to="/requestDash"
            // state={} //if to requestStatus, pass errand id
            >

            <Button onClick={handleSubmit} variant="contained">Submit Request</Button>
            </RouterLink>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </div>
  );
}
