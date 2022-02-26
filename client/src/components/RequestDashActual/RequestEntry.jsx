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

import css from '../RunnerList/runnerList.css';

function RequestEntry({errand, users, handleEntryClick}) {
  console.log('errand here', errand)
  const { start_time, end_time, date, size, weight, req_items } = errand;
  // const { placeText } = location;
  // const { username } = user;

  const startTimeEvent = new Date(start_time).toLocaleTimeString()
  const dateEvent = new Date(date).toLocaleDateString()
  console.log('errand', errand)

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
              key={errand.id}
              onClick={() => { handleEntryClick(errand); }}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '1px dashed blue' }}>
                <div className="entryColumn">
                  <div className="lineItem topLineLeft">
                    <div className="locationNumber">1</div>
                    {req_items[0].item}
                  </div>
                  <div className="lineItem">Time: {startTimeEvent}</div>
                  <div className="lineItem">Date: {dateEvent}</div>
                </div>
                <div className="entryColumn">
                  <div className="lineItem textEnd topLineRight"></div>
                  <div className="lineItem textEnd">{size}</div>
                  <div className="lineItem textEnd">{weight}</div>
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

export default RequestEntry;
