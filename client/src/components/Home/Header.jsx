/* eslint-disable react/function-component-definition */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5FC6C9',
    },
    secondary: {
      main: '#C85CDB',
    },
  },
});

const Header = () => {
  const logo = (<Typography variant="h6" component="h1">Neighbr</Typography>);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
        <ToolBar>
          <Box sx={{ display: 'flex' }}>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              // onClick={handleDrawerOpen}
              edge="start"
            // sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          {logo}
        </ToolBar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;