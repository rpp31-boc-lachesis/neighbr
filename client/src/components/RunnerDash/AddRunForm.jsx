import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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
//       date: dayjs(new Date()),
//       startTime: dayjs({}),
//       endTime: dayjs({}),
//       transportation: '',

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <TextField
        required
        fullWidth
        id="destination"
        label="Destination"
        name="destination"
        value={destination}
        onChange={(newValue) => setDestination(newValue)}
      />
      <DatePicker
        label="Date"
        value={date}
        onChange={(newValue) => setDate(newValue)}
        renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} />}
      />
      <TimePicker
        label="Start Time"
        value={startTime}
        onChange={(newValue) => setStart(newValue)}
        renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} />}
      />
      <TimePicker
        label="Stop Time"
        value={stopTime}
        onChange={(newValue) => setStop(newValue)}
        renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} />}
      />
    </LocalizationProvider>
  );
}

// class AddRunForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       destination: '',
//       date: dayjs(new Date()),
//       startTime: dayjs({}),
//       endTime: dayjs({}),
//       transportation: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleDateChange = this.handleDateChange.bind(this);

//     const style = {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: '33%',
//       bgcolor: 'background.paper',
//       border: '2px solid #000',
//       boxShadow: 24,
//       p: 4,
//     };
//   }

//   handleChange(e) {
//     const { target } = e;

//     this.setState({
//       [target.name]: target.value
//     });
//   }

//   handleDateChange(e) {
//     this.setState({
//       date: e.value
//     });
//   }

//   render() {
//     const { destination, date, startTime, endTime, transportation } = this.state;
//     return (
//       <LocalizationProvider dateAdapter={DateAdapter}>
//         <TextField
//           required
//           fullWidth
//           label="Destination"
//           name="destination"
//           value={destination}
//           onChange={this.handleChange}
//         />
//         <DesktopDatePicker
//           required
//           label="Date"
//           inputFormat="MM/dd/yyyy"
//           name="date"
//           value={date}
//           onChange={this.handleDateChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//     );
//   }
// }
