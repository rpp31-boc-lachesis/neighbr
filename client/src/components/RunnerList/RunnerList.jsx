/* eslint-disable react/jsx-indent */
import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DestinationEntry from './DestinationEntry.jsx';
import DestinationDetail from './DestinationDetail.jsx';

import Footer from '../Home/Footer.jsx';
import css from './RunnerList.css';

function DestinationList() {
  return (
    <Container maxwidth="sm" sx={{border: '1px dashed red'}}>
      <Grid container sx={{ flexGrow: 1, height: '600px', border: '1px solid  green', marginTop: '20px' }} justifyContent="center" alignItems="center" spacing={2}>
{/* left column */}
        <Grid container item direction="column" sx={{ minHeight: '100%', border: '1px solid orange' }} xs={2}>
          {/* <Container
          maxwidth="sm"
        > */}
          {/* <AddRunModal handlePostRun={handlePostRun} /> */}
          {/* <img src={wavyBuddyPoint} alt="" /> */}
          {/* </Container> */}
          <center>

          Filter by:<br/>
          Time<br/>
          morning<br/>
          midday<br/>
          afternoon<br/>
          evening<br/>
          <br/>
          Type<br/>
          groceries<br/>
          food<br/>
          etc<br/>
          etc<br/>
          </center>
        </Grid>
{/* middle column */}
        <Grid item xs={4} sx={{ minHeight: '100%', border: '1px solid orange' }}>
          {/* <Typography variant='h5'>Current Runs</Typography> */}
          <Stack spacing={2} sx={{ minHeight: '100%', border: '1px solid blue'}}>
      -- sort by: distance
          <DestinationEntry />
          <DestinationEntry />
          <DestinationEntry />
          <DestinationEntry />
          </Stack>
        </Grid>
{/* right column */}
        <Grid item xs={6} sx={{ minHeight: '100%', border: '1px solid orange' }}>
        <Stack spacing={2} sx={{ minHeight: '100%', border: '1px solid blue' }}>
          <Box sx={{ height: '40vh', maxWidth: '564px', border: '1px solid black', borderRadius: '2px' }}>
            <div style={{width: '100%', height: '100%'}}>
            <img className='mapImage' src="https://www.evernote.com/l/AAUb4rYWCdJDBaV76K7JnS7CHkR1LNFYPm8B/image.png" alt='a map'></img>
            </div>
          </Box>
          <Box sx={{ height: '35vh', minWidth: '100%', border: '1px solid black', borderRadius: '2px', backgroundColor: '#de9de9' }}>
            detail
            <DestinationDetail />
          </Box>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </Container>

  );
}

export default DestinationList;
