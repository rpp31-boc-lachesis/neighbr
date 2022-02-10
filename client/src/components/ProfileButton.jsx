import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfileButton(props) {
  const { handleClick } = props;
  return (
    <Button
      variant="contained"
      startIcon={<AccountCircleIcon />}
      onClick={handleClick}
    >
      View Profile
    </Button>
  );
}

ProfileButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};
