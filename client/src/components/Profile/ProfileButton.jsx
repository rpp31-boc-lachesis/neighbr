import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfileButton(props) {
  const { handleClick, themeColor } = props;
  return (
    <Button
      color={themeColor}
      variant="contained"
      startIcon={<AccountCircleIcon />}
      onClick={handleClick}
      // sx={{
      //   boxSizing: 'unset',
      //   width: '130px',
      //   height: '18px',
      //   padding: '2px',
      //   borderRadius: '8px'
      // }}
    >
      View Profile
    </Button>
  );
}

ProfileButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  themeColor: PropTypes.string.isRequired
};
