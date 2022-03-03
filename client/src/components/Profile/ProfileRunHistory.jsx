import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DomainIcon from '@mui/icons-material/Domain';
import PlaceIcon from '@mui/icons-material/Place';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HouseIcon from '@mui/icons-material/House';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CommuteIcon from '@mui/icons-material/Commute';

export default function ProfileRunHistory(props) {
  const { history } = props;
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#73B4FA' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DomainIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary={history.location.placeText} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PlaceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary={history.location.placeName} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HouseIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Neighorhood" secondary={history.location.neighborhood} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AddShoppingCartIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Category" secondary={history.location.category} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Start Time" secondary={`${new Date(history.startTime)}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="End Time" secondary={`${new Date(history.endTime)}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CommuteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Transportation" secondary={history.transportation} />
      </ListItem>
    </List>
  );
}

ProfileRunHistory.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object
};

ProfileRunHistory.defaultProps = {
  history: PropTypes.object
};
