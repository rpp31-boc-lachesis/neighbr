import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import PeopleIcon from '@mui/icons-material/People';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="http://neighbr.site/">
//         Neighbr
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

function Login({ user, warning, handleSignin }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Warning = styled('div')({
    color: 'white',
    backgroundColor: '#e6204f',
    padding: 8,
    borderRadius: 4,
    marginBottom: 20
  });

  const handleWarning = (message) => <Warning>{message}</Warning>;

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://i.ibb.co/ssdBN2k/Screen-Shot-2022-02-09-at-9-22-23-PM.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 30,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {warning && handleWarning('!  Incorrect username or password.')}
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PeopleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          {user && (<Navigate to="/main" replace />)}
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleSignin(loginData);
            }}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />
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
                color="primary"
                value={loginData.password}
                onChange={handleChange}
                inputProps={{
                  'data-testid': 'password'
                }}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                Don&apos;t have an account?&nbsp;
                <RouterLink style={{ textDecoration: 'none', color: '#C85CDB', fontWeight: 'bold' }} to="/signup">
                  Sign Up
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;

Login.propTypes = {
  handleSignin: PropTypes.func.isRequired
};
