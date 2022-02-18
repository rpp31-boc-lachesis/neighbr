import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import searchLocation from './searchLocation.js';

export default function LocationAutoComplete(props) {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const { proximity } = props;

  React.useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    searchLocation(inputValue, proximity)
      .then((response) => response.json())
      .then((results) => {
        if (active) {
          let newOptions = [];

          if (results) {
            newOptions = [...newOptions, ...results.features];
          }

          setOptions(newOptions);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      active = false;
    };
  }, [value, inputValue, searchLocation]);

  return (
    <Autocomplete
      id="google-map-demo"
      // sx={{ width: 300 }}
      fullWidth
      getOptionLabel={(option) => option.place_name}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      isOptionEqualToValue={(option, value) => option.features.place_name === value.features.place_name}
      renderInput={(params) => (
        <TextField {...params} label="Add a location" fullWidth />
      )}
    />
  );
}
