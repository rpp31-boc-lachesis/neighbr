import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const Splash = () => {

  const overall = {
    fontFamily: "Optima",
    fontSize: '60px'
  };

  const logo = {
    position: 'absolute',
    left:'32%',
    top: '32%',
    color: '#C85CDB',
    fontSize: '100px',
    display: "inline-block",
    whiteSpace: 'nowrap'
  };

  const photo = {
    position: 'absolute',
    bottom: '5%',
    left: '30%',
    height: '50%',
    width: '40%'
  };

  const p1 = {
    position: 'absolute',
    left:'28%',
    top: '25%'
  }

  const p2 = {
    fontSize:'60px',
    color:'black'
  }

  return (
    <div>
      <Navbar />
      <div style={overall}>
        <span style={p1}>Your Favorite</span>
        <div style={logo}>
          <span>Neighbr</span>
          <span style = {p2}> is here for you!</span>
        </div>
      </div>
      <div>
        <img style={photo} src='https://i.ibb.co/9WdVCrG/image1.png' alt="splash" />
      </div>
    </div>
  );
}

export default Splash;