import React from 'react';
import Paper from '@mui/material/Paper';

export default function Footer() {
  return (
    <Paper
      sx={{
        color: '#FFFFFF',
        backgroundColor: '#DE9DE9',
        position: 'fixed',
        height: '50px',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 0,
        verticalAlignment: 'middle',
        textAlign: 'center',
      }}
      elevation={5}
    >
      <p>© Neighbr. All rights reserved.</p>
    </Paper>
  );
}
