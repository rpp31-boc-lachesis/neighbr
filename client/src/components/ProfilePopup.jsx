import React, { useState } from 'react';
import { Popover } from '@mui/material';
import ProfileButton from './ProfileButton.jsx';
import ProfileCard from './ProfileCard.jsx';

export default function ProfilePopup() {
  // const [ openPopup, setOpenPopup ] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    event.persist();
    console.log(event.currentTarget);
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
        sx={{ borderRadius: '15px' }}
      >
        <ProfileCard handleClose={handleClose} />
      </Popover>
    </div>
  );
}
