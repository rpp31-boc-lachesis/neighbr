import React, { useReducer } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PeopleIcon from '@mui/icons-material/People';
import Typography from '@mui/material/Typography';

function Signup() {
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      email: '',
      password: ''
    }
  );

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
            my: 15,
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="usernmae"
              autoFocus
              color="secondary"
              defaultValue={formInput.usename}
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              color="secondary"
              helperText="e.g. name@gmail.com"
              defaultValue={formInput.email}
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
              color="secondary"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age (18+)"
              name="Age"
              autoComplete="Age"
              color="secondary"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              defaultValue={formInput.password}
              onChange={handleInput}
            />
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
