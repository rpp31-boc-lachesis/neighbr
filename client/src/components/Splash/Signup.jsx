import React, { useReducer, useState } from 'react';
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

function Signup({ user, handleAuth }) {
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      avatar_url: 'https://i.ibb.co/9H7KLLs/image5.png',
      street_address: '',
      city: '',
      state: '',
      zip: '',
      country: 'US',
      bio: '',
      showPassword: false
    }
  );

  const [loginData, setLoginData] = useState({ username: '', password: '' });

  // const validate = () => {
  //   const temp = {};
  //   temp.first_name = values.first_name ? '' : 'This field is required.';
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { formInput };

    axios.post('/signup', data.formInput)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormInput({ [name]: value });
  };

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
          <Box component="form" noValidate onSubmit={(e) => { handleSubmit(e); handleAuth(e, loginData); }} sx={{ mt: 1 }}>
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
              <Grid item xs={12}>
                <TextField
                  margin="none"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  color="secondary"
                  defaultValue={formInput.password}
                  onChange={(e) => { handleInput(e); handleLogin(e); }}
                />
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
            {/* <RouterLink to="/main"> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* </RouterLink> */}
            <Grid container>
              <Grid item>
                Already have an account?&nbsp;
                <RouterLink style={{ color: '#5FC6C9', fontWeight: 'bold' }} to="/login">
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
  user: propTypes.string.isRequired,
  handleAuth: PropTypes.func.isRequired
};
