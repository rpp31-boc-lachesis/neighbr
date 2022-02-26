/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import PropTypes from 'prop-types';
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
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
    const newRequests = [];
    let currentRun = {};

    for (let i = 0; i < runs.length; i += 1) {
      if (runs[i].user.username === user) {
        currentRun = runs[i];
        break;
      }
    }

    for (let i = 0; i < errands.length; i += 1) {
      const { _id: errandID } = errands[i];
      const { acceptedErrands, declinedErrands } = currentRun;

      if (!acceptedErrands.includes(errandID) && !declinedErrands.includes(errandID)) {
        newRequests.push(errands[i]);
      }
    }

    this.setState({
      map,
      newRequests,
      currentRun
    });
  }

  onRequestAccept(errandObj) {
    const {
      _id,
      dropoff,
      category,
      requester,
      req_items: reqItems,
      start_time: startTime
    } = errandObj;
    const { address } = dropoff;
    const { newRequests, acceptedErrands, mapMarkers } = this.state;
    const requestsArr = [...newRequests];
    const acceptedRequest = requestsArr.splice(0, 1);

    const newAcceptedErrands = [...acceptedErrands, acceptedRequest[0]];

    const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
      .forwardGeocode({
        query: address,
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
        const marker = new mapboxgl
          .Marker()
          .setLngLat(feature.center)
          .setPopup(
            new mapboxgl.Popup().setHTML(`<h2>${category}</h2>
            <p><strong>${requester}</strong><br>
            <strong>Address:</strong> ${address}<br>
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

        const newMapMarkers = { ...mapMarkers, [_id]: marker };

        this.setState({
          newRequests: requestsArr,
          acceptedErrands: newAcceptedErrands,
          mapMarkers: newMapMarkers
        });
      });
  }

  onRequestDeny() {
    const { newRequests } = this.state;
    const newRequestsCopy = [...newRequests];
    newRequestsCopy.shift();

    this.setState({ newRequests: newRequestsCopy });
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
    const { newRequests, acceptedErrands } = this.state;

    return (
      <Grid
        container
        sx={{
          padding: '4vw'
        }}
        // alignItems="center"
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
                <Typography>Placeholder</Typography>
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
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  width: '100%',
                  overflow: 'scroll',
                  padding: '1vh'
                }}
                justifyContent="space-around"
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
