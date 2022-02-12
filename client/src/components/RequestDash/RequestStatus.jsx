import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import RequestMap from './RequestMap.jsx';

class RequestStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container fixed>
        <Typography display="block" align="justify" variant="h6">Request: Starbucks</Typography>
        <RequestMap />
        <Grid
          container
          direction="row"
          alignItems="center"
          border="2px solid #DE9DE9"
          borderRadius="15px"
        >
          <Grid item>
            <AccessTimeIcon style={{
              width: '30px', height: '30px', fill: '#5D5FEF'
            }}
            />
          </Grid>
          <Grid item>Promised by:</Grid>
          <Grid item xs={1} />
          <Grid item>{this.date ? this.date : 'Sunday, January 10, 2:35 PM'}</Grid>
        </Grid>
        <Typography display="block" align="justify" variant="h6">Errand Details</Typography>
        <Card sx={{ border: '2px solid #DE9DE9', borderRadius: '20px' }}>
          <CardActions disableSpacing>
            <Avatar variant="contained" alt="Haylie Schleifer" src="https://s3-alpha-sig.figma.com/img/3af9/cdaf/deb44c5856c64700478bf852a42f0b39?Expires=1645401600&Signature=JtN06o7d7VxxRFAIT~fGHgQ8ksRMkbd4QJNc9QgZVhW9TXTMXbDA0G7D4YFJz~y-4yARMnM8fjAMZhMjyAl5hKAvQuOUjVoma4T-jvXJfjfGYBLbQYyZrCY6JswM2E3hDrSLSyGpiY-tJiXKgqkLRslqU22anM82NNyaLhnamx6nzk3zOhiPsfPd7kJGnS4wM61ZSgl3ph5H9t~o8IKLo7HLeHlnhfMV30QvNqzJcrcj-q0eaHs4zGBt~mo5gv-MN~AARdCfGyZNbyjNo-vw72b-2B~qdeimvVCsKO-ZsqdTTqYD2YKDoFSxROt6Nt1m4skXwhngMYEx8CTT1CivdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" sx={{ width: '70px', height: '70px' }} />
            <Typography variant="h6">Haylie Schleifer</Typography>
          </CardActions>
          <CardContent>
            <Typography variant="h5">Pick-Up: 1118 McLaren Park, Washington, DC</Typography>
            <Typography variant="h5">Drop-Off: 339 Sandy St, Washington, DC</Typography>
            <Typography variant="body2">Quantity: 1</Typography>
            <Typography variant="body2">Size: Small</Typography>
            <Typography variant="body2">Cart: 1x Venti Iced Latte</Typography>
            <Typography variant="body2">Note: You are my hero, thank you for helping me out!</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default RequestStatus;
