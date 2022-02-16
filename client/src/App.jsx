import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Splash from './components/Splash/Splash.jsx';
import Header from './components/Home/Header.jsx';
import Main from './components/Home/Main.jsx';
import Other from './components/Other.jsx';
import RunnerDash from './components/RunnerDash/RunnerDash.jsx';
import RunnerStatus from './components/RunnerStatus/RunnerStatus.jsx';
import RunnerList from './components/RunnerList/RunnerList.jsx';
import RequestStatus from './components/RequestDash/RequestStatus.jsx';
import Error from './components/Error.jsx';
import testData from './testData'; // temporary test data
import Signup from './components/Splash/Signup.jsx';
import Login from './components/Splash/Login.jsx';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
const theme = responsiveFontSizes(createTheme({
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
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [],
      isLoggedIn: false
    };
    this.handlePostRun = this.handlePostRun.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handlePostRun(run) {
    const { destinations } = this.state;
    this.setState({
      destinations: [...destinations, run]
    });
    fetch('/runs', {
      method: 'POST',
      body: JSON.stringify(run),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          {(isLoggedIn) ? <Header /> : null }
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/other" element={<Other />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login handleLogin={this.handleLogin} />} />
            <Route path="/main" element={<Main />} />
            <Route path="/requestStatus" element={<RequestStatus />} />
            <Route path="/requestDash" element={<RunnerList />} />
            <Route path="/runnerDash" element={<RunnerDash destinations={testData} handlePostRun={this.handlePostRun} />} />
            <Route path="/runnerStatus" element={<RunnerStatus />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
