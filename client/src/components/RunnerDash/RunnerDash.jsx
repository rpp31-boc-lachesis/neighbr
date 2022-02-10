import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import wavyBuddyPoint from '../../assets/wavyBuddiesStanding.png';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// class PostErrand extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render() {

//   }
// }
export default function RunnerDash(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Container>
            <Button>Post New Run</Button>
            <img src={wavyBuddyPoint} alt="" />
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Item>Center</Item>
        </Grid>
        <Grid item>
          <Item>Right</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
