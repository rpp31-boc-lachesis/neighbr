import React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/CloseRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import SendIcon from '@mui/icons-material/SendRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import DashboardIcon from '@mui/icons-material/DashboardRounded';

export default function Header() {
  const [state, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logo = (<Typography variant="h5" component="div" sx={{ fontFamily: 'Optima' }}>Neighbr</Typography>);
  const list = (
    <List>
      {['', 'Home', 'Post Your Run', 'Find Your Runner', 'Runner Dashboard', 'Requester Dashboard'].map((text, i) => (
        <ListItem button key={text} onClick={handleDrawerClose}>
          <ListItemIcon sx={{ color: '#EF5DA8' }}>
            {
              {
                0: <CloseIcon />,
                1: <HomeIcon />,
                2: <SendIcon />,
                3: <SearchIcon />,
                4: <DashboardIcon />,
                5: <DashboardIcon />
              }[i]
            }
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ background: '#5FC6C9', color: '#FFFFFF' }}>
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
            <Tooltip title="User">
              <IconButton>
                <Avatar size="small" alt="Hack Rector" src="https://ucarecdn.com/88f0c4ce-01b1-4771-8de4-fb2ce647dba9/" sx={{ backgroundColor: '#FFFFFF' }} />
              </IconButton>
            </Tooltip>
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
