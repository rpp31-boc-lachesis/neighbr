import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import axios from 'axios';
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
import authService from './auth.js';
// import ProfilePopup from './components/ProfilePopup.jsx';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

authService.jwtInterceptor(axios);

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
      user: '',
      userPhoto: '',
    };
    this.handlePostRun = this.handlePostRun.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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

  handleAuth(e, loginData) {
    e.preventDefault();

    axios.request({
      url: '/login',
      method: 'post',
      data: loginData
    })
      .then((res) => {
        const { data } = res;
        authService.setLocalStorage(data);
        // const expire = authService.getExpiration();
        // console.log(expire.$d)
        this.setState({
          user: data.username,
          userPhoto: data.avatar_url
        });
      })
      .catch((e) => {
        console.log(e);
        setError('Uhhh, we couldn\'t find the id or password');
      });
  }

  handleSignUp(e, loginData) {
    e.preventDefault();
    // console.log('loginData', loginData);
    // const { data } = res;
    authService.setLocalStorage(loginData);
    // const expire = authService.getExpiration();
    // console.log(expire.$d)

    this.setState({
      user: loginData.username,
      userPhoto: loginData.avatar_url
    });
  }

  render() {
    const { user, userPhoto } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          {user ? <Header userPhoto={userPhoto} user={user} /> : null }
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/other" element={<Other />} />
            <Route path="/signup" element={<Signup handleSignUp={this.handleSignUp} user={user} />} />
            <Route path="/login" element={<Login handleAuth={this.handleAuth} user={user} />} />
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
