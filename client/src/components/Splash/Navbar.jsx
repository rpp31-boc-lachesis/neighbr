import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <Stack direction="row" spacing={3} justifyContent="end" sx={{ mr: '5%', mt: '3%' }}>
      <Button size="large" color="primary" variant="outlined"><Link style={{ textDecoration: 'none', color: '#C85CDB' }} to="/login">Log In</Link></Button>
      <Button size="large" color="secondary" variant="outlined"><Link style={{ textDecoration: 'none', color: '#5FC6C9' }} to="/signup">Sign Up</Link></Button>
    </Stack>
  );
}

export default Navbar;
