import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Errand from './Errand.jsx';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGRmdXF1YSIsImEiOiJja3pqa3VrMnMwd3c1MnZwYXlkbzV2eWU0In0.ysBe17NfB-x0MG0O-LAgNA';

class RunnerStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRequests: [{ errandName: 'groceries', requesterName: 'Tiffany' }],
      acceptedErrands: []
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  render() {
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
                <Errand
                  type="NewRequest"
                  errandName={this.state.newRequests[0].errandName}
                  requesterName={this.state.newRequests[0].requesterName}
                />
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
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  width: '100%'
                }}
                item
              >
                {
                  this.state.acceptedErrands.map((req) => {
                    return (
                      <Errand
                        type="AcceptedErrand"
                        errandName={req.errandName}
                        requesterName={req.requesterName}
                      />
                    )
                  })
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
                <Typography>Map</Typography>
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

export default RunnerStatus;
