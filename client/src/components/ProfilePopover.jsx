import React, { useState } from 'react';
import { Popover } from '@mui/material';
import ProfileButton from './ProfileButton.jsx';
import ProfileCard from './ProfileCard.jsx';

export default function ProfilePopover() {
  // const [ openPopup, setOpenPopup ] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    event.persist();
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
      >
        <ProfileCard handleClose={handleClose} />
      </Popover>
    </div>
  );
}
