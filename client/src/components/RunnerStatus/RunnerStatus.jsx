import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

class RunnerStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Grid
          container
          height="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid // left column
            xs
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box
              sx={{
                width: '100%',
                textAlign: 'start'
              }}
            >
              <Typography sx={{ color: 'secondary.main' }}>Run Details</Typography>
              <Box
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
              sx={{
                width: '100%',
                textAlign: 'start',
              }}
            >
              <Typography sx={{ color: '#F88202' }}>New Requests</Typography>
              <Box
                container
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  width: '100%'
                }}
                item
              >
                <Typography item>Placeholder</Typography>
              </Box>
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
                sx={{
                  border: 1,
                  borderRadius: 4,
                  borderColor: '#F88202',
                  width: '100%'
                }}
                item
              >
                <Typography>Placeholder</Typography>
              </Box>
            </Box>

          </Grid>
          <Grid // right column
            xs
            item
            container
            direction="column"
            alignItems="center"
          >
            <Typography>Map</Typography>
            <Typography>Errand Details</Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default RunnerStatus;
