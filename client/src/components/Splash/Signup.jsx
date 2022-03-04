import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PeopleIcon from '@mui/icons-material/People';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import LocationAutoComplete from '../RunnerDash/LocationAutocomplete.jsx';
import searchLocation from '../RunnerDash/searchLocation.js';

function Signup({ user, handleSignin }) {
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      avatar_url: '',
      street_address: '',
      city: '',
      state: '',
      zip: '',
      country: 'US',
      bio: '',
      coordinates: {
        lat: '',
        long: ''
      }
    }
  );
  const [error, setError] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      zip: ''
    }
  );
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [proximity, setProximity] = useState(null);
  // const validate = () => {
  //   const temp = {};
  //   temp.first_name = values.first_name ? '' : 'This field is required.';
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { formInput };

    if (data.formInput.first_name.length === 0
        || data.formInput.last_name.length === 0
        || data.formInput.username.length === 0
        || data.formInput.email.length === 0
        || data.formInput.password.length === 0
        || data.formInput.zip.length < 5) {
      if (data.formInput.first_name.length === 0) {
        setError({ first_name: 'please enter valid first name' });
      }
      if (data.formInput.first_name.length === 0) {
        setError({ last_name: 'please enter valid last name' });
      }
      if (data.formInput.username.length === 0) {
        setError({ username: 'please enter valid username' });
      }
      if (data.formInput.email.length === 0) {
        setError({ email: 'please enter valid email' });
      }
      if (data.formInput.password.length === 0) {
        setError({ password: 'please enter valid password' });
      }
      if (data.formInput.zip.length < 5) {
        setError({ zip: 'please enter valid zip' });
      }
    } else {
      // console.log(data.formInput);
      axios.post('/signup', data.formInput)
        .then((response) => {
          handleSignin(loginData);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormInput({ [name]: value });
  };

  const handleLocChange = (value) => {
    if (value !== null) {
      // console.log(value);
      setFormInput({
        coordinates: {
          lat: value.geometry.coordinates[0],
          long: value.geometry.coordinates[1]
        },
        street_address: value.place_name
      });
      value.context.forEach((arr) => {
        // console.log(arr);
        if (arr.id.startsWith('place')) {
          setFormInput({
            city: arr.text,
          });
        }
        if (arr.id.startsWith('region')) {
          setFormInput({
            state: arr.text,
          });
        }
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const uploadImage = (e) => {
    const file = e.target.files;
    const data = new FormData();
    data.append('file', file[0]);
    data.append('upload_preset', 'q0ubw64h');
    // specific to cloudinary

    // setLoading(true);
    const res = fetch(
      'https://api.cloudinary.com/v1_1/dkztds7yn/image/upload',
      {
        method: 'Post',
        body: data
      }
    ).then((response) => response.json()).then((resData) => {
      const name = 'avatar_url';
      const value = resData.secure_url;
      setFormInput({ [name]: value });
      setLoginData({ ...loginData, [name]: value });
    });
  };
  useEffect(() => {
    // uploadImage();
  }, [formInput.avatar_url]);

  useEffect(() => {
    if (formInput.zip.length >= 5) {
      searchLocation(formInput.zip, null,)
        .then((res) => res.data)
        .then((result) => {
          setProximity(result.features[0].center);
        })
        .catch((err) => { console.log(err); });
    }
  }, [formInput.zip]);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://i.ibb.co/ZmMGMGq/Screen-Shot-2022-02-11-at-12-43-26-PM.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 10,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PeopleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          { user && (<Navigate to="/main" replace />)}
          <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }} data-testid="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="none"
                  required
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  autoFocus
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.first_name}
                  onChange={handleInput}
                  helperText={error.first_name}
                  error={!!error.first_name}
                  inputProps={{ 'data-testid': 'first-name' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="none"
                  required
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.last_name}
                  onChange={handleInput}
                  helperText={error.last_name}
                  error={!!error.last_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="none"
                  required
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.username}
                  onChange={(e) => { handleInput(e); handleLogin(e); }}
                  helperText={error.username}
                  error={!!error.username}
                  inputProps={{
                    'data-testid': 'username'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="none"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                  defaultValue={formInput.email}
                  onChange={handleInput}
                  helperText={error.email}
                  error={!!error.email}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  margin="none"
                  required
                  fullWidth
                  id="street_address"
                  label="Address Line"
                  name="street_address"
                  autoComplete="street_address"
                  color="secondary"
                  defaultValue={formInput.street_address}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="none"
                  required
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.city}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="none"
                  required
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.state}
                  onChange={handleInput}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  margin="none"
                  required
                  id="zip"
                  label="ZIP Code"
                  name="zip"
                  autoComplete="zip"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.zip}
                  onChange={handleInput}
                  helperText={error.zip}
                  error={!!error.zip}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  margin="none"
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.country}
                  onChange={handleInput}
                /> */}
                <LocationAutoComplete proximity={proximity} handleLocChange={handleLocChange} />
              </Grid>
              <Grid item xs={12} sx={{ color: 'secondary.main' }}>
                <FormControl fullWidth required>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={(
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )}
                    id="password"
                    autoComplete="current-password"
                    color="secondary"
                    value={formInput.password}
                    onChange={(e) => { handleInput(e); handleLogin(e); }}
                    inputProps={{
                      'data-testid': 'password'
                    }}
                    helpertext={error.password}
                    error={!!error.password}
                  />
                  {!!error.password && (
                  <FormHelperText error id="password-error">
                    {error.password}
                  </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="none"
                  multiline
                  maxRows={4}
                  fullWidth
                  name="bio"
                  label="Introduce Yourself ..."
                  type="bio"
                  id="bio"
                  color="secondary"
                  defaultValue={formInput.bio}
                  onChange={handleInput}
                />
              </Grid>
            </Grid>
            <br />
            Profile Photo&nbsp;&nbsp;
            <Input
              // style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              accept="image/*"
              label="Your profile photo..."
              onChange={uploadImage}
            />
            {/* <Fab
              color="secondary"
              size="small"
              component="span"
              aria-label="add"
              variant="extended"
            >
              <AddIcon />
            </Fab> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              data-testid="submit-button"
            >
              Sign Up
            </Button>
            {/* </RouterLink> */}
            <Grid container>
              <Grid item>
                Already have an account?&nbsp;
                <RouterLink style={{ textDecoration: 'none', color: '#5FC6C9', fontWeight: 'bold' }} to="/login">
                  Log In
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;

Signup.propTypes = {
  user: PropTypes.string.isRequired,
  handleSignin: PropTypes.func.isRequired
};
