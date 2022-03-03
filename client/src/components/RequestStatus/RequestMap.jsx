import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import PropTypes from 'prop-types';

export default function RequestMap(props) {
  const { pickup } = props;

  useEffect(() => {
    const pickupLong = pickup[0] !== undefined ? pickup[0] : 0;
    const pickupLat = pickup[1] !== undefined ? pickup[1] : 0;

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeW1peWFtb3RvIiwiYSI6ImNrempyOWg2bzBkYXgydnFvcWplZmJ1a2oifQ.oQ9QtYxKsabjCYJqjwmo0g';
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [pickupLong, pickupLat],
      zoom: 14
    });

    new mapboxgl
      .Marker()
      .setLngLat({ lng: Number(pickupLong), lat: Number(pickupLat) })
      .addTo(map);
    map.flyTo({
      center: map.center,
      speed: 1.5,
      zoom: 14
    });

    map.addControl(new mapboxgl.NavigationControl());
  }, [pickup]);

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

RequestMap.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pickup: PropTypes.array
};

RequestMap.defaultProps = {
  pickup: PropTypes.array
};
