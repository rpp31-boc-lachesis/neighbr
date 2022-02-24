import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { Popover } from '@mui/material';
import ProfileButton from './ProfileButton.jsx';
// import ProfileCard from './ProfileCard.jsx';

export default function ProfilePopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { children } = props;
  // TEMPORARY USERNAME
  // const tempUser = 'organicrabbit525';

  const handleClick = (event) => {
    event.preventDefault();
    event.persist();
    // axios.get(`/users/${tempUser}`)
    //   .then((results) => {
    //     const oneUser = results.data[0];
    //     console.log(oneUser);
    //     setCurrentUser(oneUser);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="ProfilePopup">
      <ProfileButton handleClick={handleClick} />
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
        {children}
        {/* <ProfileCard handleClose={handleClose} currentUser={currentUser} /> */}
      </Popover>
    </div>
  );
}

ProfilePopover.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node
};
