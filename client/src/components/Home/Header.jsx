import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/CloseRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import SendIcon from '@mui/icons-material/SendRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import DashboardIcon from '@mui/icons-material/DashboardRounded';

export default function Header({ user, userPhoto, logout }) {
  const [state, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const open = Boolean(anchorElUser);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logo = (<Link to="/main" style={{ color: '#FFFFFF', textDecoration: 'none' }}><Typography variant="h5" component="div" sx={{ fontFamily: 'Optima' }}>Neighbr</Typography></Link>);
  const list = (
    <List>
      {['', 'Home', 'Post Your Run / Dashboard', 'Find Your Runner', 'Requester Dashboard'].map((text, i) => (
        <Link
          key={text}
          to={{
            0: '#',
            1: '/main',
            2: '/runnerDash',
            3: '/runnerList',
            4: '/requestDash'
          }[i]}
          style={{ color: '#707070', textDecoration: 'none' }}
        >
          <ListItem button key={text} onClick={handleDrawerClose}>
            <ListItemIcon sx={{ color: '#EF5DA8' }}>
              {
                {
                  0: <CloseIcon />,
                  1: <HomeIcon />,
                  2: <SendIcon />,
                  3: <SearchIcon />,
                  4: <DashboardIcon />
                }[i]
              }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ background: '#5FC6C9', color: '#FFFFFF' }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        >
          <Box>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ color: '#FFFFFF' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {logo}
          <Box>
            <Tooltip title={user}>
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar size="small" alt={user} src={userPhoto} sx={{ backgroundColor: '#FFFFFF' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleCloseUserMenu}
            >
              <Link to="/profilemain" style={{ textDecoration: 'none' }}>
                <MenuItem>
                  <Typography sx={{ color: '#EF5DA8' }}>Profile</Typography>
                </MenuItem>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <MenuItem onClick={logout}>
                  <Typography sx={{ color: '#EF5DA8' }}>Logout</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Box>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={state}
        onClose={handleDrawerClose}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        {list}
      </Drawer>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  userPhoto: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};
