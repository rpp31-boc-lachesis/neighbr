/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-indent */
import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DestinationEntry from './DestinationEntry.jsx';
import DestinationDetail from './DestinationDetail.jsx';

import Footer from '../Home/Footer.jsx';
import css from './runnerList.css';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


const BORDER_PX = '0px'
// const BORDER_PX = '1px'


function RunnerList(props) {
  const { runs, locations, errands, user, handleRequestErrand, refreshData} = props;
  console.log('in RunsList', 'RUNS', runs);
  console.log('in RunsList', 'LOCATIONS', locations);

  const [runDetail, setRunDetail] = useState(null);
  const [mapCenter, setMapCenter] = useState([-79.4512, 43.6568])

  //variation of componentDidMount for hooks
  useEffect(() => {
    //stuff
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGRmdXF1YSIsImEiOiJja3pqa3VrMnMwd3c1MnZwYXlkbzV2eWU0In0.ysBe17NfB-x0MG0O-LAgNA';
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-79.4512, 43.6568],
      center: mapCenter,
      zoom: 13
    });
    // this.setState({
    //   map,
    //   newRequests: errands
    // });
  }, []);

  const handleEntryClick = (run) => {
    setRunDetail(run);
    setMapCenter(run.location.coordinates)
    console.log('coords', run.location.coordinates)

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGRmdXF1YSIsImEiOiJja3pqa3VrMnMwd3c1MnZwYXlkbzV2eWU0In0.ysBe17NfB-x0MG0O-LAgNA';
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-79.4512, 43.6568],
      center: mapCenter,
      zoom: 13
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat(mapCenter)
      .addTo(map);
  };

  const Runs = runs.map((run) => <DestinationEntry run={run} handleEntryClick={handleEntryClick} key={run._id}/>);

  return (
    <Container maxwidth="sm" sx={{border: `${BORDER_PX} dashed red` }}>
      <Grid container sx={{ flexGrow: 1, height: '600px', border: `${BORDER_PX} solid  green`, marginTop: '20px' }} justifyContent="center" alignItems="top" spacing={2}>
{/* left column */}
        <Grid container item direction="column" sx={{ minHeight: '100%', border: `${BORDER_PX} solid orange` }} xs={2}>

          <center>

          Filter by:
<br />
          Time
<br />
          morning
<br />
          midday
<br />
          afternoon
<br />
          evening
<br />
          <br />
          Type
<br />
          groceries
<br />
          food
<br />
          etc
<br />
          etc
<br />
          </center>
        </Grid>
{/* middle column */}
        <Grid item xs={4} sx={{ minHeight: '100%', border: `${BORDER_PX} solid orange` }}>
          {/* <Typography variant='h5'>Current Runs</Typography> */}
          <Stack spacing={2} sx={{ height: '550px', overflow: 'overlay', border: `${BORDER_PX} solid blue`}}>
          {Runs}
          </Stack>
        </Grid>
{/* right column */}
        <Grid item xs={6} sx={{ minHeight: '100%', border: `${BORDER_PX} solid orange` }}>
        <Stack spacing={2} sx={{ minHeight: '100%', border: `${BORDER_PX} solid blue` }}>

          <Box
            id="mapContainer"
            container
            sx={{
              border: 1,
              borderRadius: 4,
              borderColor: '#F88202',
              height: '300px',
              width: '100%'
            }}
            item
          >
                <Typography>Map</Typography>
          </Box>
            <DestinationDetail runDetail={runDetail} handlePostErrand={handlePostErrand} refreshData={refreshData}/>
          {/* </Box> */}
        </Stack>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default RunnerList;
