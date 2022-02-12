import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Splash from './components/Splash/Splash.jsx';
import Other from './components/Other.jsx';
import RunnerDash from './components/RunnerDash/RunnerDash.jsx';
import RunnerStatus from './components/RunnerStatus/RunnerStatus.jsx';
import Error from './components/Error.jsx';
import testData from './testData'; // temporary test data
import Signup from './components/Splash/Signup.jsx';
import Login from './components/Splash/Login.jsx';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
const theme = createTheme({
  palette: {
    primary: {
      main: '#C85CDB',
    },
    secondary: {
      main: '#5FC6C9',
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [],
    };
    this.handlePostDest = this.handlePostDest.bind(this);
  }

  handlePostDest(run) {
    const { destinations } = this.state;
    this.setState({
      destinations: [...destinations, run]
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/other" element={<Other />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/runnerDash" element={<RunnerDash destinations={testData} handlePostDest={this.handlePostDest} />} />
            <Route path="/runnerStatus" element={<RunnerStatus />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
