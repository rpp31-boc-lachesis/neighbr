/* eslint-disable react/jsx-indent */
import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

//temp
import Header from '../Home/Header.jsx';
import Footer from '../Home/Footer.jsx';
import css from './runnerList.css';

function DestinationEntry() {
  // const tempNav = {
  //   backgroundColor: "orange",
  //   outline: "1px dashed black"
  // };

  // const containerNav = {
  //   backgroundColor: "orange",
  //   outline: "1px dashed black",
  //   display: "flex",
  //   flexDirection: "column"
  // };

  // const EntryBox = styled(Box)(({ theme }) => ({
  //   width: '100%',
  //   height: '30%',
  //   spacing: 1,
  //   margin: '5px 0px 0px',
  //   padding: '2px',
  //   background: 'green',
  //   border: '1px solid red'
  // }));




  return (
  // <div style={tempNav}>
  //   My Page Two
  //   <div style={containerNav}>
  //     <div style={tempNav}>
  //       one
  //     </div>
  //     <div style={tempNav}>
  //       two
  //     </div>
  //     <div style={tempNav}>
  //       three
  //     </div>
  //   </div>
  // </div>
  <>
  {/* entryBox */}
  <RouterLink style={{ textDecoration: 'none' }} to="/runnerDash">
            <Box sx={{
              height: '100px',
              minWidth: '100%',
              border: '0px solid black',
              borderRadius: '10px',
              background: '#5FC6C9',
              '&:hover': {
                background: '#5FC6C9',
                opacity: [0.9, 0.8, 0.7],
              },
              }}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '0px dashed blue' }}>
                <div className='entryColumn'>
                <div className='lineItem topLineLeft'>
                  <div className='locationNumber'>1</div>
                  Target</div>
                  <div className='lineItem'>Time: 2:15 PM</div>
                  <div className='lineItem'>Date: 02 - 01 - 22</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                <div className='entryColumn'>
                  <div className='lineItem textEnd topLineRight'>Steve</div>
                  <div className='lineItem textEnd'>By: Car</div>
                  <div className='lineItem textEnd'>San Francisco</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                {/* <Stack spacing={3} sx={{ minHeight: '100%', border: '1px dashed blue' }}>
                {/* <EntryBox>Item 1 Item 1 Item 1</EntryBox>
                  <EntryBox>Item 2</EntryBox>
                  <EntryBox>Item 3</EntryBox>
                </Stack> */}
              </Stack>
          </Box>
          </RouterLink>
          </>
  );
}

export default DestinationEntry;
