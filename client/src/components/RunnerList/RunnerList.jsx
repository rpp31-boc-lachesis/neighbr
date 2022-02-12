import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const RunnerList = () => {

  const tempNav = {
    backgroundColor: "orange",
    outline: "1px dashed black"
  };

  const containerNav = {
    backgroundColor: "orange",
    outline: "1px dashed black",
    display: "flex",
    flexDirection: "column"
  };

    return (
      <div style={tempNav}>
        My Page Two
        <div style={containerNav}>
          <div style={tempNav}>
            one
          </div>
          <div style={tempNav}>
            two
          </div>
          <div style={tempNav}>
            three
          </div>
        </div>
      </div>
    );

}

export default RunnerList;
