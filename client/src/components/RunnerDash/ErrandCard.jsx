import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const ErrandCard = function(props) {
  const { errand } = props;
  const user = errand.requester.hasOwnProperty('username')
    ? errand.requester.username
    : errand.requester.email;
  console.log(user);

  return (
    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', border: '2px dashed', borderColor: 'secondary.main', flexShrink: 0, width: '35%', margin: '0.5em', zIndex: '-1' }}>
      <CardHeader avatar={
        <Avatar sx={{ height: '5rem', width: '5rem'}} alt={errand.requester.email} src={errand.requester.avatar_url} />
      }
      />
      <CardContent>
        <Typography variant="body1" color="primary.dark">
          {user}
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Item: {errand.req_items[0].item}
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Address: {errand.requester.street_address}
        </Typography>
      </CardContent>
      <CardActions sx={{marginTop: 'auto'}}>
        <Button sx={{alignSelf: 'flex-end'}} variant="contained">Yes</Button>
        <Button sx={{alignSelf: 'flex-end'}} variant="contained">No</Button>
      </CardActions>
    </Card>
  );
};

export default ErrandCard;