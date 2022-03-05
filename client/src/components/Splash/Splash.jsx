import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar.jsx';

function Splash({ user }) {
  const overall = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
  };

  const slogan = {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '50%',
    height: '50%',
    marginTop: '70px'
  };
  const photo = {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '50%',
    height: '50%',
    marginTop: '20px'
  };
  return (
    <Grid>
      { user ? null : <Navbar /> }
      <div style={overall}>
        <img style={slogan} src="https://ucarecdn.com/571e81b2-3b17-44e8-aad3-393e8e41271d/slogan.svg" alt="slogan" />
        <img style={photo} src="https://ucarecdn.com/d4060b59-7e76-4b0a-8529-ea2f56d5825f/" alt="splash" />
      </div>
    </Grid>
  );
}

export default Splash;

Splash.propTypes = {
  user: PropTypes.string.isRequired
};
