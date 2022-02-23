import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function RequestMap() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeW1peWFtb3RvIiwiYSI6ImNrempyOWg2bzBkYXgydnFvcWplZmJ1a2oifQ.oQ9QtYxKsabjCYJqjwmo0g';
    // process.env.MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.4512, 43.6568],
      zoom: 13
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl
      })
    );
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
