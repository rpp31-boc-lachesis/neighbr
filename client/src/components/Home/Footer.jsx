import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        display: 'flex',
        borderRadius: 0,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
      }}
      elevation={5}
    >
      <Typography variant="body2" color="text.secondary" justifyContent="center">
        ©
        {'  '}
        {new Date().getFullYear()}
        {'  '}
        <a href="https://github.com/rpp31-boc-lachesis/neighbr" style={{ textDecoration: 'none' }}>
          Neighbr
          {'  '}
          <GitHubIcon sx={{ fontSize: 20, p: 0 }} />
        </a>
      </Typography>
    </Paper>
  );
}
