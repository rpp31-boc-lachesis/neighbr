import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export default function RequestMap() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeW1peWFtb3RvIiwiYSI6ImNrempyOWg2bzBkYXgydnFvcWplZmJ1a2oifQ.oQ9QtYxKsabjCYJqjwmo0g';
    // process.env.MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.04, 38.907],
      zoom: 11.15
    });

    map.addControl(new mapboxgl.NavigationControl());
  });

  const style = {
    position: 'relative',
    top: '155px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 250,
    bgcolor: 'background.paper',
    p: 4,
    '& .MuiTextField-root': { m: 1 },
  };

  return (
    <Box
      id="mapContainer"
      container
      sx={style}
      item
    />
  );
}
