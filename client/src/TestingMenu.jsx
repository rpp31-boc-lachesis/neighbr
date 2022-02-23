/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';

const testingButton = {
  position: 'absolute',
  top: '100px',
  left: '17px',
  /* height: 50px; */
  background: 'yellow'
};

const testingMenu = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
};

function TestingMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={testingButton}>
      <Button sx={{ height: 30 }} onClick={handleClick}>Access</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={testingMenu}>
          <Link to="/main">
            <Button sx={{ height: 30 }}>Main</Button>
          </Link>
          <Link to="/runnerList">
            <Button sx={{ height: 30 }}>RunnerList</Button>
          </Link>
          <Link to="/requestDash">
            <Button sx={{ height: 30 }}>RequestDash</Button>
          </Link>
          <Link to="/runnerDash">
           <Button sx={{ height: 30 }}>RunnerDash</Button>
          </Link>
          <Link to="/requestStatus">
            <Button sx={{ height: 30 }}>RequestStatus</Button>
          </Link>
          <Link to="/runnerStatus">
           <Button sx={{ height: 30 }}>RunnerStatus</Button>
          </Link>
          {/* <Route path="/" element={<Splash user={user} />} /> */}
          {/* <Route path="/signup" element={<Signup handleSignUp={this.handleSignUp} user={user} />} /> */}
          {/* <Route path="/login" element={<Login handleAuth={this.handleAuth} user={user} />} /> */}
          {/* <Route path="/other" element={<Other />} /> */}
          {/* <Route path="/profile" element={<ProfilePopover />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </div>
      </Popover>
    </div>
  );
}

export default TestingMenu;
