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
import ProfilePopover from '../Profile/ProfilePopover.jsx';
import AddRequestModal from './addRequestModal.jsx';


function DestinationDetail({runDetail}) {

  if (runDetail === null) {
    return (
<>
  {/* entryBox */}
            <Box sx={{ height: '200px', minWidth: '100%', border: '1px solid black', borderRadius: '10px', background: '#5FC6C9'}}>
              Select run for details
            </Box>
            </>
    )
  }

    const { startTime, endTime, date, location, transportation, user } = runDetail;
    const { placeText } = location;
    const { username } = user;

    const startTimeEvent = new Date(startTime).toLocaleTimeString()
    const dateEvent = new Date(date).toLocaleDateString()

  return (
  <>
  {/* entryBox */}
            <Box sx={{ height: '200px', minWidth: '100%', border: '1px solid black', borderRadius: '10px', background: '#5FC6C9'}}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '1px dashed blue', alignItems:'top' }}>
                <div className="entryColumn" alignself="flex-start">
                <div className="detailItem topLineLeft">
                  <div className="locationNumber">1</div>
                    {placeText}
                </div>
                  <div className="detailItem">Time: {startTimeEvent}</div>
                  <div className="detailItem">Date: {dateEvent}</div>
                </div>
                <div className="entryColumn">
                {/* <RouterLink style={{ textDecoration: 'none' }} to="/main"> */}
                <Avatar variant="contained" alt="Haylie Schleifer" src={user.avatar_url} sx={{ width: '80px', height: '80px' }} />
                <ProfilePopover user={user.username} themeColor='primary'/>
                {/* </RouterLink> */}
                  <div className="detailItem textEnd topLineRight">{username}</div>
                  <div className="detailItem textEnd">By: {transportation}
                  </div>
                  <div className="detailItem textEnd">{location.district}</div>
                  {/* <Typography variant="h5">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography>
                  <Typography variant="body1">Item 1</Typography> */}
                </div>
                {/* link to requestStatus */}
                <AddRequestModal run={runDetail}/>
                {/* <RouterLink style={{ textDecoration: 'none' }} to="/requestStatus">
                <Button>Request</Button>
                </RouterLink> */}

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

export default DestinationDetail;


//on request button
  //modal to request form

  //on accept of request form
    //go to summary?