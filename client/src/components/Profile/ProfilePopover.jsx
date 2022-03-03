import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Popover } from '@mui/material';
import ProfileButton from './ProfileButton.jsx';
import ProfileCard from './ProfileCard.jsx';

export default function ProfilePopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const { user, themeColor } = props;

  useEffect(() => {
    axios.get(`/users/populate/${user}`)
      .then((results) => {
        const oneUser = results.data[0];
        console.log('CURRENT USER:', oneUser);
        setCurrentUser(oneUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleClick = (event) => {
    event.preventDefault();
    event.persist();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('handleClose')
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    Object.keys(currentUser).length > 0
    && (
    <div className="ProfilePopup">
      <ProfileButton handleClick={handleClick} themeColor={themeColor} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          maxWidth: '25%',
          minWidth: '15%',
          height: 'auto'
        }}
      >
        <ProfileCard handleClose={handleClose} currentUser={currentUser} themeColor={themeColor} />
      </Popover>
    </div>
    )
  );
}

ProfilePopover.propTypes = {
  user: PropTypes.string,
  themeColor: PropTypes.string
};

ProfilePopover.defaultProps = {
  user: PropTypes.string,
  themeColor: PropTypes.string
};
