import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DomainIcon from '@mui/icons-material/Domain';
import PlaceIcon from '@mui/icons-material/Place';
import HouseIcon from '@mui/icons-material/House';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CategoryIcon from '@mui/icons-material/Category';
import CalculateIcon from '@mui/icons-material/Calculate';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function ProfileReqHistory(props) {
  const { history } = props;
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#73B4FA' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DomainIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary={history.pickup.locationId.placeText} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PlaceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary={history.pickup.locationId.placeName} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HouseIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Neighorhood" secondary={history.pickup.locationId.neighborhood} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CategoryIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Category" secondary={history.pickup.locationId.category} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Start Time" secondary={`${new Date(history.start_time)}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="End Time" secondary={`${new Date(history.end_time)}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AddShoppingCartIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Items" secondary={history.req_items[0].item} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalculateIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Quantity" secondary={history.req_items[0].quantity} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FitnessCenterIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weight" secondary={history.weight} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FitScreenIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Size" secondary={history.size.toUpperCase()} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Date" secondary={history.date.slice(0, 10)} />
      </ListItem>
    </List>
  );
}

ProfileReqHistory.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object
};

ProfileReqHistory.defaultProps = {
  history: PropTypes.object
};
