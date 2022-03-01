import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar.jsx';

function Splash({ user }) {
  const overall = {
    fontFamily: 'Optima',
    fontSize: '4vw'
  };

  const logo = {
    fontFamily: 'Optima',
    position: 'absolute',
    left: '32%',
    top: '32%',
    color: '#C85CDB',
    fontSize: '8vw',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  };

  const photo = {
    position: 'absolute',
    bottom: '5%',
    left: '25%',
    height: '50%'
    // width: '50%'
  };

  const p1 = {
    fontFamily: 'Optima',
    position: 'absolute',
    left: '28%',
    top: '25%'
  };

  const p2 = {
    fontFamily: 'Optima',
    fontSize: '4vw',
    color: 'black'
  };

  return (
    <Grid>
      { user ? null : <Navbar /> }
      <div style={overall}>
        <span style={p1}>Your Favorite</span>
        <div style={logo}>
          <span>Neighbr</span>
          <span style={p2}> is here for you!</span>
        </div>
      </div>
      <div>
        <img style={photo} src="https://ucarecdn.com/d4060b59-7e76-4b0a-8529-ea2f56d5825f/" alt="splash" />
      </div>
    </Grid>
  );
}

export default Splash;

Splash.propTypes = {
  user: PropTypes.string.isRequired
};
