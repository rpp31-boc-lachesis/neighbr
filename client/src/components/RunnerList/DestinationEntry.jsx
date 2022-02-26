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

import css from './runnerList.css';

function DestinationEntry({run, handleEntryClick}) {
  const { startTime, endTime, date, location, transportation, user } = run;
  const { placeText } = location;
  const { username } = user;

  const startTimeEvent = new Date(startTime).toLocaleTimeString()
  const dateEvent = new Date(date)
  console.log('run', run)

  return (
  <>
  {/* entryBox */}
            <Box
              sx={{
              // height: '100px',
                maxWidth: '95%',
                border: '1px solid black',
                borderRadius: '10px',
                background: '#5FC6C9',
                '&:hover': {
                  background: '#5FC6C9',
                  opacity: [0.9, 0.8, 0.7],
                }
              }}
              key={run.id}
              onClick={() => { handleEntryClick(run); }}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '1px dashed blue' }}>
                <div className="entryColumn">
                  <div className="lineItem topLineLeft">
                    <div className="locationNumber">1</div>
                    {placeText}
                  </div>
                  <div className="lineItem">Time: {startTimeEvent}</div>
                  <div className="lineItem">Date: {dateEvent.toLocaleDateString()}</div>
                </div>
                <div className="entryColumn">
                  <div className="lineItem textEnd topLineRight">{username}</div>
                  <div className="lineItem textEnd">By: {transportation}</div>
                  <div className="lineItem textEnd">{location.district}</div>
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
          </>
  );
}

export default DestinationEntry;
