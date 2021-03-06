/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
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

import RequestEntry from './RequestEntry.jsx';
import RequestDetail from './RequestDetail.jsx';

import css from '../RunnerList/runnerList.css';

//testing
// const testLoggedInUser = 'happycat171';

const BORDER_PX = '0px';
// const BORDER_PX = '1px'


function RequestDash(props) {
  const { errands, locations, user} = props;
  // console.log('in RequestDash', 'ERRANDS', errands);

  const [requestDetail, setRequestDetail] = useState(null);
  const [mapCenter, setMapCenter] = useState([-79.4512, 43.6568])

  //variation of componentDidMount for hooks
  useEffect(() => {
    //stuff
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGRmdXF1YSIsImEiOiJja3pqa3VrMnMwd3c1MnZwYXlkbzV2eWU0In0.ysBe17NfB-x0MG0O-LAgNA';
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: mapCenter,
      zoom: 13
    });
    // this.setState({
    //   map,
    //   newRequests: errands
    // });
  }, []);



  const handleEntryClick = (request) => {
    // console.log('request:', request)
    setRequestDetail(request);
    // console.log('rDetail', requestDetail)
    // // console.log('request location:', request.pickup.locationId)
    // // console.log('locations', locations[0]._id)
    // const pickup = locations.find((location) => location._id === request.pickup.locationId)
    // console.log(pickup.coordinates)
    // setMapCenter(pickup.coordiantes)
    // console.log('mapcenter', mapCenter)

    // mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGRmdXF1YSIsImEiOiJja3pqa3VrMnMwd3c1MnZwYXlkbzV2eWU0In0.ysBe17NfB-x0MG0O-LAgNA';
    // const map = new mapboxgl.Map({
    //   container: 'mapContainer',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   // center: [-79.4512, 43.6568],
    //   center: mapCenter,
    //   zoom: 13
    // });
    // const marker1 = new mapboxgl.Marker()
    //   .setLngLat(mapCenter)
    //   .addTo(map);
  };

  // let pending = '';

  // pending = errands.map((errand) => {
  //   if (errand.requester.username === testLoggedInUser
  //     && errand.accepted === false) {
  //     return (<RequestEntry errand={errand} handleEntryClick={handleEntryClick} key={errand.id} />);
  // }})

  // console.log(pending)

  return (
    <Container maxwidth="sm" sx={{ border: `${BORDER_PX} dashed red` }}>
      <Grid container sx={{ flexGrow: 1, height: '600px', border: `${BORDER_PX} solid  green`, marginTop: '20px' }} justifyContent="center" alignItems="top" spacing={2}>
{/* left column */}
        <Grid container item direction="column" sx={{ minHeight: '100%', border: `${BORDER_PX} solid orange` }} xs={2}>
          {/* <Container
          maxwidth="sm"
        > */}
          {/* <AddRunModal handlePostRun={handlePostRun} /> */}
          {/* <img src={wavyBuddyPoint} alt="" /> */}
          {/* </Container> */}

        </Grid>
{/* middle column */}
        <Grid item xs={4} sx={{ minHeight: '100%', border: `${BORDER_PX} solid orange` }}>
          {/* <Typography variant='h5'>Current Runs</Typography> */}
          <Stack spacing={2} sx={{ height: '550px', overflow: 'overlay', border: `${BORDER_PX} solid blue` }}>
            Pending
          {
            errands.map((errand) => {
              // console.log('pending - false', errand.requester.username, errand.accepted)
              if (errand.requester.username === user
                && errand.accepted === false) {
                return (<RequestEntry errand={errand} handleEntryClick={handleEntryClick} key={errand._id} />);
              }
            })
          }
            Accepted
          {
            errands.map((errand) => {
              // console.log('accept - true', errand.requester.username, errand.accepted)
              if (errand.requester.username === user
                && errand.accepted === true
                && errand.req_items[0].status === 'In-Progress') {
                return (<RequestEntry errand={errand} handleEntryClick={handleEntryClick} key={errand._id} />);
              }
            })
          }
            Complete
          {
            errands.map((errand) => {
              // console.log(errand.requester.username, errand.req_items[0].status)
              if (errand.requester.username === user
                && errand.accepted === true
                && errand.req_items[0].status === 'Completed') {
                return (<RequestEntry errand={errand} handleEntryClick={handleEntryClick} key={errand._id} />);
              }
            })
          }
          </Stack>
        </Grid>
{/* right column */}
        <Grid item xs={6} sx={{ minHeight: '100%', border: `${BORDER_PX} solid orange` }}>
        <Stack spacing={2} sx={{ minHeight: '100%', border: `${BORDER_PX} solid blue` }}>
          {/* <Box sx={{ height: '40vh', maxWidth: '564px', border: '1px solid black', borderRadius: '2px' }}>
            <div style={{width: '100%', height: '100%'}}>
            <img className='mapImage' src="https://www.evernote.com/l/AAUb4rYWCdJDBaV76K7JnS7CHkR1LNFYPm8B/image.png" alt='a map'></img>
            </div>
          </Box> */}
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
          {/* <Box sx={{ height: '35vh', minWidth: '100%', border: '1px solid black', borderRadius: '2px', backgroundColor: '#de9de9' }}> */}
            <RequestDetail requestDetail={requestDetail} />
          {/* </Box> */}
        </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RequestDash;