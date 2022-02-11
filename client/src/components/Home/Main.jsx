import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C85CDB',
    },
    secondary: {
      main: '#5FC6C9',
    },
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header />
        <ThemeProvider theme={theme}>
          <Stack direction="column" spacing={3} alignItems="center" sx={{ mt: 50 }}>
            <Button color="primary" variant="contained" sx={{ width: 500, height: 50 }}>Want to post a run?</Button>
            <Button color="secondary" variant="contained" sx={{ width: 500, height: 50 }}>Would you like to find a runner?</Button>
          </Stack>
        </ThemeProvider>
        <Footer />
      </>
    );
  }
}

export default Main;