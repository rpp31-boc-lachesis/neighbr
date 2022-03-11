/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function ErrandCard(props) {
  const { errand, user, runId, refreshData } = props;
  const { accepted } = errand;
  const requestUser = Object.prototype.hasOwnProperty.call(errand.requester, 'username')
    ? errand.requester.username
    : errand.requester.email;

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: accepted === true ? '2px solid' : '2px dashed',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'secondary.main',
    flexShrink: 0,
    width: '35%',
    margin: '0.5em',
  };

  const handleAccept = () => {
    axios.post('/errands/accept', { data: { errandId: errand._id, user } })
      .then(() => { refreshData(); })
      .catch((err) => console.error(err));
  };

  const handleDecline = () => axios.post(
    '/runs/updateNoMap',
    {
      data: {
        runID: runId,
        errandID: errand._id,
        type: 'declinedErrands'
      }
    }
  )
    .then(() => { refreshData(); })
    .catch((err) => { console.error(err); });

  React.useEffect(() => {
    if (accepted) {
      cardStyle.border = '2px dashed';
    }
  });

  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardHeader
        sx={{ paddingBottom: 0 }}
        avatar={
          <Avatar sx={{ height: '5rem', width: '5rem' }} alt={errand.requester.username} src={errand.requester.avatar_url} />
      }
      />
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography sx={{ maxWidth: '100%', textOverflow: 'ellipsis' }} paddingBottom="0.5rem" variant="h6" color="primary.dark">
          {requestUser}
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Item
        </Typography>
        <Typography variant="body2" paddingBottom="1rem" color="primary.dark">
          {`${errand.req_items[0].item}`}
        </Typography>
        <Typography variant="body1" color="primary.dark">
          Address
        </Typography>
        <Typography variant="body2" color="primary.dark">
          {`${errand.requester.street_address}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto' }}>
        <Button sx={{ alignSelf: 'flex-end' }} variant="contained" onClick={() => handleAccept()}>Yes</Button>
        <Button sx={{ alignSelf: 'flex-end' }} variant="contained" onClick={() => handleDecline()}>No</Button>
      </CardActions>
    </Card>
  );
}
