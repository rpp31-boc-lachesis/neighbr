import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function ProfileMap(props) {
  const { coordinates } = props;
  const { lat, long } = coordinates;
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeW1peWFtb3RvIiwiYSI6ImNrempyOWg2bzBkYXgydnFvcWplZmJ1a2oifQ.oQ9QtYxKsabjCYJqjwmo0g';
    // process.env.MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom: 14
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
    width: 380,
    height: 275,
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

ProfileMap.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  coordinates: PropTypes.object.isRequired,
  lat: PropTypes.func,
  long: PropTypes.func
};

ProfileMap.defaultProps = {
  lat: PropTypes.func,
  long: PropTypes.func
};
