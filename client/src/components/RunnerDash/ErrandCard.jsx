import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const ErrandCard = function(props) {
  const { errand, declined, user } = props;
  const requestUser = errand.requester.hasOwnProperty('username')
    ? errand.requester.username
    : errand.requester.email;

  const [accepted, setAccepted] = React.useState(errand.accepted);
  const [isDeclined, setIsDeclined] = React.useState(declined);

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'secondary.main',
    flexShrink: 0,
    width: '35%',
    margin: '0.5em',
  };

  cardStyle.border = accepted === true ? '2px solid' : '2px dashed';

  const handleAccept = () => {
    console.log(errand);
    axios.post('/errands/accept', { data: { errandId: errand._id, user } })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.error(err));
  };

  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardHeader avatar={
        <Avatar sx={{ height: '5rem', width: '5rem'}} alt={errand.requester.email} src={errand.requester.avatar_url} />
      }
      />
      <CardContent>
        <Typography variant="body1" color="primary.dark">
          {requestUser}
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Item: {errand.req_items[0].item}
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Address: {errand.requester.street_address}
        </Typography>
      </CardContent>
      <CardActions sx={{marginTop: 'auto'}}>
        <Button sx={{alignSelf: 'flex-end'}} variant="contained" onClick={() => handleAccept()}>Yes</Button>
        <Button sx={{alignSelf: 'flex-end'}} variant="contained" onClick={() => console.log('click')}>No</Button>
      </CardActions>
    </Card>
  );
};

export default ErrandCard;
