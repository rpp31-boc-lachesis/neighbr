import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

  const overall = {
    textAlign: "center",
    margin: "auto",
    fontFamily: "Optima",
    fontSize: '60px'
  };

  const logo = {
    textAlign: "center",
    margin: "auto",
    fontFamily: "Optima",
    color: '#C85CDB',
    fontSize: '100px'
  };

  const photo = {
    position: 'absolute',
    bottom: '0',
    left: '30%',
    height: '40%',
    width: '40%'
  };

  return (
    <div>
      <div style={overall}>
        <p>Your Favorite</p>
        <p style={logo}>Neighbr</p>
        <p>is here for you!</p>
      </div>
      <div>
        <img style={photo} src='https://i.ibb.co/9WdVCrG/image1.png' alt="splash" />
      </div>
    </div>
  );
}

export default Splash;
