/* eslint-disable react/jsx-indent */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
  // console.log('errand here', errand)
  const { start_time, end_time, date, size, weight, req_items, runner } = errand;
  // const { placeText } = location;
  // const { username } = user;

  const startTimeEvent = new Date(start_time).toLocaleTimeString()
  const dateEvent = new Date(date).toLocaleDateString()
  // console.log('errand', errand)

  const [runnerAvatar, setRunnerAvatar] = useState('');
  const [runnerUsername, setRunnerUsername] = useState('');

useEffect(() => {
  if (runner) {
    axios.get(`/user/${runner}`)
      .then((results) => {
        // console.log('RUNNER RESULTS: ', results.data[0]);
        setRunnerAvatar(results.data[0].avatar_url);
        setRunnerUsername(results.data[0].username);
        // setRunnerFullname(`${results.data[0].first_name} ${results.data[0].last_name}`);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    setRunnerAvatar('');
    setRunnerUsername('');
  }
})

  return (
  <>
  {/* entryBox */}
            <Box
              sx={{
              // height: '100px',
                maxWidth: '95%',
                border: '0px solid black',
                borderRadius: '10px',
                background: '#DE9DE9',
                '&:hover': {
                  background: '#DE9DE9',
                  opacity: [0.9, 0.8, 0.7],
                }
              }}
              key={errand.id}
              onClick={() => { handleEntryClick(errand); }}>
              <Stack direction="row" spacing={2} sx={{ minHeight: '100%', border: '0px dashed blue' }}>
                <div className="entryColumn">
                  <div className="lineItem topLineLeft">
                    <Typography variant="h5">
                    {req_items[0].item}
                      </Typography>
                  </div>
                  <Typography variant='body2'>
                  <div className="lineItem">Time: {startTimeEvent}</div>
                  <div className="lineItem">Date: {dateEvent}</div>
                    </Typography>
                </div>
                <div className="entryColumn">
                  <Typography variant='body2'>
                    {errand.accepted ?
                    <div className="lineItem textEnd topLineRight">{runnerUsername}</div> : <div className="lineItem textEnd topLineRight">-----</div>
                    }
                    <div className="lineItem textEnd">Size: {size}</div>
                    <div className="lineItem textEnd">Weight: {weight}</div>
                  </Typography>
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

export default RequestEntry;
