import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C85CDB',
    },
    secondary: {
      main: '#5FC6C9',
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={3} justifyContent="end" sx={{ mr: 5, mt: 5 }} >
            <Button color = 'primary' variant="outlined"><Link to='/login'>Log In</Link></Button>
            <Button color = 'secondary' variant="outlined"><Link to='/signup'>Sign Up</Link></Button>
      </Stack>
    </ThemeProvider>

  );
}

export default Navbar;
