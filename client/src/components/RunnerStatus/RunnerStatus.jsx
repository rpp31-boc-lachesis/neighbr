/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import Errand from './Errand.jsx';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGRmdXF1YSIsImEiOiJja3pqa3VrMnMwd3c1MnZwYXlkbzV2eWU0In0.ysBe17NfB-x0MG0O-LAgNA';

class RunnerStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: undefined,
      newRequests: [],
      acceptedErrands: [],
      mapMarkers: {},
      currentRun: {}
    };
  }

  componentDidMount() {
    const { errands, runs, user } = this.props;
    const newRequests = [];
    let currentRun;

    for (let i = 0; i < runs.length; i += 1) {
      if (runs[i].user.username === user) {
        currentRun = runs[i];
        break;
      }
    }

    // for (let i = 0; i < errands.length; i += 1) {
    //   const { _id: errandID } = errands[i];
    //   const { acceptedErrands, declinedErrands } = currentRun;

    //   if (!acceptedErrands.includes(errandID) && !declinedErrands.includes(errandID)) {
    //     newRequests.push(errands[i]);
    //   }
    // }

    // const currentRun = runs[3];

    const {
      acceptedErrands,
      declinedErrands,
      completedErrands,
      map: runMap
    } = currentRun;

    for (let i = 0; i < errands.length; i += 1) {
      const { _id: errandID } = errands[i];

      if (
        !acceptedErrands.includes(errandID)
        && !declinedErrands.includes(errandID)
        && !completedErrands.includes(errandID)) {
        newRequests.push(errands[i]);
      }
    }
    const map = new mapboxgl.Map({
      container: 'mapContainer', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    /*
     * Attempting to either add a marker-filled map back to the page after being received from
     * the DB, or to iteratively add markers to a new map
     * There is currently a map object attached to each run, and every map object contains
     * a _markers property that contains info pertaining to all markers on the map.
     * The problem atm is that I have been unsuccessful at adding a previously
     * existing map to the page, or if I am able to somehow make that happen,
     * The Completed button on each card would not be able to remove its respective
     * marker on the map, as there is no way to reference the items within the _markers array
     */

    // const currentRunMarkers = Object.entries(runMap);
    // if (currentRunMarkers.length > 0) {
    //   currentRunMarkers.forEach(([id, marker]) => {
    //     for (let i = 0; i < acceptedErrands.length; i += 1) {
    //       map._markers.push(marker);
    //     }
    //   });
    // }

    this.setState({
      map,
      mapMarkers: runMap,
      newRequests,
      currentRun,
      acceptedErrands
    });
  }

  onRequestAccept(errandObj) {
    const {
      _id: errandID,
      category,
      requester,
      req_items: reqItems,
      start_time: startTime
    } = errandObj;
    const { state, street_address: streetAddress } = requester;
    const requesterAddress = `${streetAddress}, ${state}`;
    const {
      currentRun,
      newRequests,
      acceptedErrands,
      mapMarkers
    } = this.state;
    const { _id: runID } = currentRun;
    const requestsArr = [...newRequests];
    const acceptedRequest = requestsArr.splice(0, 1);

    const newAcceptedErrands = [...acceptedErrands, acceptedRequest[0]];

    const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
      .forwardGeocode({
        query: requesterAddress,
        autocomplete: false,
        limit: 1
      })
      .send()
      .then((response) => {
        if (
          !response
          || !response.body
          || !response.body.features
          || !response.body.features.length
        ) {
          // eslint-disable-next-line no-console
          console.error('Invalid response:');
          // eslint-disable-next-line no-console
          console.error(response);
          return;
        }
        const feature = response.body.features[0];
        const { map } = this.state;
        let marker = new mapboxgl
          .Marker()
          .setLngLat(feature.center)
          .setPopup(
            new mapboxgl.Popup().setHTML(`<h2>${category}</h2>
            <p><strong>${requester}</strong><br>
            <strong>Address:</strong> ${streetAddress}<br>
            <strong>Requested at:</strong> ${startTime}<br>
            <strong>Item:</strong> ${reqItems.item}</p>
            `)
          )
          .addTo(map);
        map.flyTo({
          center: feature.center,
          speed: 1.5,
          zoom: 10
        });

        marker = { ...marker, _map: undefined };

        axios({
          url: '/runs/update',
          method: 'POST',
          data: {
            errandID,
            runID,
            type: 'acceptedErrands',
            map: marker
          }
        })
          .then(() => {
            const newMapMarkers = { ...mapMarkers, [errandID]: marker };

            this.setState({
              newRequests: requestsArr,
              acceptedErrands: newAcceptedErrands,
              mapMarkers: newMapMarkers
            });
          })
          .catch((err) => console.log(err));
      });
  }

  onRequestDeny(errandObj) {
    const { _id: errandID } = errandObj;
    const { newRequests, currentRun } = this.state;
    const { _id: runID } = currentRun;
    const newRequestsCopy = [...newRequests];
    newRequestsCopy.shift();

    axios({
      url: '/runs/update',
      method: 'POST',
      data: {
        errandID,
        runID,
        type: 'declinedErrands'
      }
    })
      .then(() => {
        this.setState({ newRequests: newRequestsCopy });
      })
      .catch((err) => console.log(err));
  }

  onErrandComplete(errandID, stateIndex) {
    const { acceptedErrands, mapMarkers } = this.state;
    const newAcceptedErrands = [...acceptedErrands];
    const newMapMarkers = { ...mapMarkers };

    newAcceptedErrands.splice(stateIndex, 1);
    newMapMarkers[errandID].remove();
    newMapMarkers[errandID] = undefined;

    this.setState({
      acceptedErrands: newAcceptedErrands,
      mapMarkers: newMapMarkers
    });
  }

  render() {
    const { newRequests, acceptedErrands, currentRun } = this.state;
    const renderCard = Object.keys(currentRun).length > 0;
    let location;
    let placeText;
    let address;
    let transport;
    let startTime;
    let avatarURL;

    if (renderCard) {
      transport = currentRun.transportation;
      startTime = currentRun.start_time;
      avatarURL = currentRun.user.avatar_url;
      location = currentRun.location;
      placeText = location.placeText;
      address = location.address;

      startTime = new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short', hour12: true }).format(startTime);
    }

    return (
      <Grid
        container
        sx={{
          paddingLeft: '4vw',
          paddingRight: '4vw',
          paddingTop: '2vh',
          paddingBottom: '2vh'
        }}
        height="100%"
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid // left column
            xs
            sx={{ paddingRight: '1vh' }}
            item
            height="100%"
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                width: '100%',
                textAlign: 'start'
              }}
            >
              <Typography sx={{ color: 'secondary.main' }}>Run Details</Typography>
              <Box
                minHeight="20vh"
                sx={{
                  bgcolor: 'secondary.light',
                  border: 1,
                  borderRadius: 4,
                  borderColor: 'secondary.main',
                  width: '100%'
                }}
                item
              >
                {
                  renderCard
                  && (
                    <Grid
                      item
                      container
                      direction="row"
                      alignItems="center"
                    >
                      <Card
                        item
                        container
                        sx={{
                          color: '#FFFFFF',
                          bgcolor: 'secondary.light',
                          borderRadius: 4,
                          width: '50%',
                          minHeight: '20vh',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <CardContent
                          item
                          sx={{
                            justifyContent: 'spaced-evenly',
                            width: '100%'
                          }}
                        >
                          <Typography>
                            <strong>Location: </strong>
                            {placeText}
                          </Typography>
                          <Typography>
                            <strong>Address: </strong>
                            {address}
                          </Typography>
                          <Typography>
                            <strong>Start Time: </strong>
                            {startTime}
                          </Typography>
                          <Typography>
                            <strong>Transportation: </strong>
                            {transport}
                          </Typography>
                        </CardContent>
                      </Card>
                      <Grid
                        item
                        width="50%"
                        container
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar
                          item
                          alt="profile image"
                          name="User Avatar"
                          src={avatarURL}
                          sx={{ height: '10vh', width: '10vh' }}
                        />
                      </Grid>
                    </Grid>
                  )
                }
              </Box>
            </Box>
            <Box
              item
              sx={{
                width: '100%',
                textAlign: 'start',
              }}
            >
              <Typography sx={{ color: '#F88202' }}>New Requests</Typography>
              <Grid
                id="NewRequestsBox"
                container
                minHeight="20vh"
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  width: '100%',
                  padding: '1vh'
                }}
                alignItems="center"
                justifyContent="center"
              >
                {
                  newRequests.length >= 1
                  && (
                    <Errand
                      type="NewRequest"
                      errandObj={newRequests[0]}
                      onRequestAccept={this.onRequestAccept.bind(this)}
                      onRequestDeny={this.onRequestDeny.bind(this)}
                    />
                  )
                }
              </Grid>
            </Box>
            <Box
              sx={{
                width: '100%',
                textAlign: 'start',
              }}
            >
              <Typography sx={{ color: '#F88202' }}>Accepted Errands</Typography>
              <Box
                container
                minHeight="30vh"
                maxHeight="30vh"
                maxWidth="100%"
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  width: '100%',
                  overflow: 'scroll',
                  paddingLeft: '.5vw',
                  paddingRight: '.5vw'
                }}
                justifyContent="space-evenly"
                item
              >
                {
                  acceptedErrands.length >= 1
                  && (
                    acceptedErrands.map((req, i) => {
                      const { _id: errandID } = req;
                      return (
                        <Errand
                          key={errandID}
                          type="AcceptedErrand"
                          stateIndex={i}
                          errandObj={req}
                          onErrandComplete={this.onErrandComplete.bind(this)}
                        />
                      );
                    })
                  )
                }
              </Box>
            </Box>

          </Grid>
          <Grid // right column
            xs
            sx={{
              paddingLeft: '1vh',
              height: '100%'
            }}
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              item
              sx={{ width: '100%' }}
            >
              <Typography>&nbsp;</Typography>
              <Box
                id="mapContainer"
                container
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  height: '50vh',
                  width: '100%'
                }}
                item
              >
                { /* Map element renders here */ }
              </Box>
            </Box>
            <Box
              container
              sx={{
                height: '20vh',
                bgcolor: 'primary.light',
                border: 1,
                borderRadius: 4,
                borderColor: 'primary.main',
                width: '100%'
              }}
              item
            >
              <Typography>Placeholder</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

RunnerStatus.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errands: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  runs: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired
};

export default RunnerStatus;
