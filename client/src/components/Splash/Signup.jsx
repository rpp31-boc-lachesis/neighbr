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

function Signup({ user, handleSignUp }) {
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
      bio: ''
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
      street_address: '',
      city: '',
      state: '',
      zip: '',
    }
  );
  const [loginData, setLoginData] = useState({ username: '', password: '', avatar_url: '' });
  const [showPassword, setShowPassword] = useState(false);
  // const validate = () => {
  //   const temp = {};
  //   temp.first_name = values.first_name ? '' : 'This field is required.';
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { formInput };

    if (data.formInput.first_name.length === 0) {
      const name = 'first_name';
      const value = 'please enter valid first name';
      setError({ [name]: value });
    } else {
      // console.log(data.formInput);
      axios.post('/signup', data.formInput)
        .then((response) => {
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
  }, [loginData]);

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
            my: 4,
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
          <Box component="form" noValidate onSubmit={(e) => { handleSubmit(e); handleSignUp(e, loginData); }} sx={{ mt: 1 }} data-testid="form">
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
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="none"
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  color="secondary"
                  fullWidth
                  defaultValue={formInput.country}
                  onChange={handleInput}
                />
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
                  />
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
  handleSignUp: PropTypes.func.isRequired
};
