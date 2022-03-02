import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar.jsx';

function Splash({ user }) {
  const overall = {
    // fontFamily: 'Optima',
    // fontSize: '4vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
  };

  // const logo = {
  //   fontFamily: 'Optima',
  //   position: 'absolute',
  //   left: '32%',
  //   top: '32%',
  //   color: '#C85CDB',
  //   fontSize: '8vw',
  //   display: 'inline-block',
  //   whiteSpace: 'nowrap'
  // };

  // const photo = {
  //   position: 'absolute',
  //   bottom: '5%',
  //   left: '25%',
  //   height: '50%'
  //   // width: '50%'
  // };

  // const p1 = {
  //   fontFamily: 'Optima',
  //   position: 'absolute',
  //   left: '28%',
  //   top: '25%'
  // };

  // const p2 = {
  //   fontFamily: 'Optima',
  //   fontSize: '4vw',
  //   color: 'black'
  // };

  const slogan = {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '70%',
    height: '70%',
    marginTop: '70px'
  };
  const photo = {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '70%',
    height: '70%',
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
