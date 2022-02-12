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

function DestinationDetail() {

  return (
  <>
  {/* entryBox */}
            <Box sx={{ height: '200px', minWidth: '100%', border: '0px solid black', borderRadius: '10px', background: '#de9de9'}}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '0px dashed blue' }}>
                <div className='entryColumn'>
                <div className='detailItem topLineLeft'>
                  <div className='locationNumber'>1</div>
                    Target</div>
                  <div className='detailItem'>Time: 2:15 PM</div>
                  <div className='detailItem'>Date: 02 - 01 - 22</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                <div className='entryColumn'>
                <RouterLink style={{ textDecoration: 'none' }} to="/main">
                <Avatar>S</Avatar>
                </RouterLink>
                  <div className='detailItem textEnd topLineRight'>Steve</div>
                  <div className='detailItem textEnd'>By: Car</div>
                  <div className='detailItem textEnd'>San Francisco</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                {/* <Stack spacing={3} sx={{ minHeight: '100%', border: '0px dashed blue' }}>
                {/* <EntryBox>Item 1 Item 1 Item 1</EntryBox>
                  <EntryBox>Item 2</EntryBox>
                  <EntryBox>Item 3</EntryBox>
                </Stack> */}
              </Stack>
          </Box>
          </>
  );
}

export default DestinationDetail;
