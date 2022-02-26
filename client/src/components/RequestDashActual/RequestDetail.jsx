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


function RequestDetail({requestDetail}) {

  if (requestDetail === null) {
    return (
      <>
  {/* entryBox */}
            <Box sx={{ height: '200px', minWidth: '100%', border: '1px solid black', borderRadius: '10px', background: '#de9de9'}}>
              Select request for details
            </Box>
            </>
    )
  }

  const { start_time, end_time, date, message, weight, req_items } = requestDetail;
  // const { placeText } = location;
  // const { username } = user;

  const startTimeEvent = new Date(start_time).toLocaleTimeString()
  const dateEvent = new Date(date).toLocaleDateString()

  return (
  <>
  {/* entryBox */}
            <Box sx={{ height: '200px', minWidth: '100%', border: '1px solid black', borderRadius: '10px', background: '#de9de9'}}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '1px dashed blue' }}>
                <div className="entryColumn">
                <div className="detailItem topLineLeft">
                  <div className="locationNumber">1</div>
                    {req_items[0].item}
                </div>
                  <div className="detailItem">Time: {startTimeEvent}</div>
                  <div className="detailItem">Date: {dateEvent}</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                <div className="entryColumn">
                <RouterLink style={{ textDecoration: 'none' }} to="/main">
                <Avatar>S</Avatar>
                </RouterLink>
                  <div className="detailItem textEnd topLineRight">---</div>
                  <div className="detailItem textEnd">---</div>
                  <div className="detailItem textEnd">Message: {message}</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                <RouterLink style={{ textDecoration: 'none' }} to="/requestStatus">
                <Button>Request</Button>
                </RouterLink>
                {/* <Stack spacing={3} sx={{ minHeight: '100%', border: '1px dashed blue' }}>
                {/* <EntryBox>Item 1 Item 1 Item 1</EntryBox>
                  <EntryBox>Item 2</EntryBox>
                  <EntryBox>Item 3</EntryBox>
                </Stack> */}
              </Stack>
            </Box>
  </>
  );
}

export default RequestDetail;
