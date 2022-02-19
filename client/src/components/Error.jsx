import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Error() {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        minWidth: '100vh',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid
        item
        sm={5}
      >
        <Typography variant="h3" color="secondary">
          Hello,
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          sx={{
            paddingLeft: '20px',
            fontWeight: 'bold'
          }}
        >
          Neighbr!
        </Typography>
      </Grid>
      <Grid
        item
        sm={5}
      >
        <Typography>
          We can&apos;t find the page you&apos;re looking for!
          <br />
          Please try another page or contact us for help.
        </Typography>
      </Grid>
      <Grid
        item
        sm={5}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <img alt="main" style={{ height: '100%', width: '100%' }} src="https://ucarecdn.com/0145f339-82cd-4b03-8a6e-fa826848a5ca/" />
        </Box>
      </Grid>
    </Grid>
  );
}
