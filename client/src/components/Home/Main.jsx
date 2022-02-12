import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Runner from '@mui/icons-material/AutoAwesomeRounded';
import Requester from '@mui/icons-material/PersonSearchRounded';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './Footer.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C85CDB',
    },
    secondary: {
      main: '#5FC6C9',
    },
  }
});
const decoWrapper = {
  position: 'relative',
  left: '10px',
  top: '22px',
};
const deco = {
  width: '30%',
  height: '30%'
};
const resWrapper = {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '100%',
};
const resImage = {
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  width: '70%',
  height: '70%'
};


export default function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack direction="column" spacing={2} alignItems="center" sx={{ mt: 13, mb: 3 }}>
          <div style={decoWrapper}>
            <img alt="above btn" style={deco} src="https://ucarecdn.com/983739cd-c15a-4d31-a4af-1b32b6ebcf1e/" />
          </div>
          <Link style={{ textDecoration: 'none' }} to="/runnerDash">
            <Button color="primary" variant="contained" startIcon={<Runner />} sx={{ width: 370, height: 50 }}>Want to post a run?</Button>
          </Link>
          <Button color="secondary" variant="contained" startIcon={<Requester />} sx={{ color: '#FFFFFF', width: 370, height: 50 }}>Would you like to find a runner?</Button>
        </Stack>
      </ThemeProvider>
      <div style={resWrapper}>
        <img alt="main" style={resImage} src="https://ucarecdn.com/0145f339-82cd-4b03-8a6e-fa826848a5ca/" />
      </div>
      <Footer />
    </>
  );
}
