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
import ProfilePopover from '../Profile/ProfilePopover.jsx';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

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

  const { _id, start_time, end_time, date, message, weight, req_items, requester, runner } = requestDetail;
  // console.log(requestDetail)
  // console.log(runner)

  const [runnerAvatar, setRunnerAvatar] = useState('');
  const [runnerUsername, setRunnerUsername] = useState('');

  // const { placeText } = location;
  // const { username } = user;
  const startTimeEvent = new Date(start_time).toLocaleTimeString()
  const dateEvent = new Date(date).toLocaleDateString()

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

  return  (
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
            </div>
            <div className="entryColumn">
            {runnerUsername ? (
              <>
            <Avatar variant="contained" alt="Haylie Schleifer" src={runnerAvatar} sx={{ width: '80px', height: '80px' }} />
            <ProfilePopover user={runnerUsername} themeColor='secondary' />
              </>
            ) : ''}
              {/* <div className="detailItem textEnd topLineRight">Your Runner</div> */}
              {/* <div className="detailItem textEnd">---</div> */}
              <div className="detailItem textEnd">Message: {message}</div>
            </div>
            <RouterLink
              style={{ textDecoration: 'none' }}
              to="/requestStatus"
              state={requestDetail}
            >
              <Button>Status</Button>
            </RouterLink>
          </Stack>
        </Box>
      </>
  )
}

export default RequestDetail;
