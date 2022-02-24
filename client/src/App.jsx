import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import axios from 'axios';
import Splash from './components/Splash/Splash.jsx';
import Header from './components/Home/Header.jsx';
import Main from './components/Home/Main.jsx';
import Other from './components/Other.jsx';
import RunnerDash from './components/RunnerDash/RunnerDash.jsx';
import RunnerList from './components/RunnerList/RunnerList.jsx';
import RequestStatus from './components/RequestDash/RequestStatus.jsx';
import RunnerStatus from './components/RunnerStatus/RunnerStatus.jsx';
import Error from './components/Error.jsx';
import testData from './testData'; // temporary test data
import Signup from './components/Splash/Signup.jsx';
import Login from './components/Splash/Login.jsx';
import authService from './auth.js';
// import ProfilePopup from './components/ProfilePopup.jsx';
import ProfilePopover from './components/ProfilePopover.jsx';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import TestingMenu from './TestingMenu.jsx';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#C85CDB',
    },
    secondary: {
      main: '#5FC6C9',
    },
  },
  typography: {
    fontFamily: 'Roboto'
  },
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      destinations: [],
      user: window.localStorage.getItem('user') || '',
      userPhoto: window.localStorage.getItem('avatar_url') || '',
      isLoggedIn: false,
      // isLoggedIn: true, //test setting
      isLoaded: false,
      locations: [],
      runs: [],
      users: [],
      errands: [],
    };
    this.handlePostRun = this.handlePostRun.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const {
      locations,
      runs,
      users,
      errands
    } = this.state;
    const fetches = [
      axios.get('/locations')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              const oldArr = [...locations];
              this.setState({ locations: [...oldArr, ...result] });
            }
          },
          (error) => { this.setState({ isLoaded: true, error }); }
        ),
      axios.get('/runs')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              const oldArr = [...runs];
              this.setState({ runs: [...oldArr, ...result] });
            }
          },
          (error) => { this.setState({ isLoaded: true, error }); }
        ),
      axios.get('/allusers')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              const oldArr = [...users];
              this.setState(
                { users: [...oldArr, ...result] },
                () => {
                  // eslint-disable-next-line no-console
                  console.log('USERS:', result);
                }
              );
            }
          },
          (error) => { this.setState({ isLoaded: true, error }); }
        ),
      axios.get('/errands')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              const oldArr = [...errands];
              this.setState({ errands: [...oldArr, ...result] });
            }
          },
          (error) => { this.setState({ isLoaded: true, error }); }
        )
    ];

    Promise.all(fetches)
      .then(this.setState({ isLoaded: true }));
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
        this.setState({
          user: data.username,
          userPhoto: data.avatar_url
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSignUp(e, loginData) {
    e.preventDefault();
    // console.log('loginData', loginData);
    // const { data } = res;
    // authService.setLocalStorage(loginData);
    // const expire = authService.getExpiration();
    // console.log(expire.$d)
    window.localStorage.setItem('user', loginData.username);
    window.localStorage.setItem('avatar_url', loginData.avatar_url);
    this.setState({
      user: loginData.username,
      userPhoto: loginData.avatar_url
    });
  }

  logout() {
    this.setState({
      user: '',
      userPhoto: ''
    });
    authService.logout();
  }

  render() {
    const { user, userPhoto } = this.state;
    // eslint-disable-next-line object-curly-newline
    const {
      error,
      isLoaded,
      isLoggedIn,
      destinations,
      locations,
      users,
      runs
    } = this.state;
    if (error) {
      return <Error />;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <TestingMenu />
          {user ? <Header userPhoto={userPhoto} user={user} logout={this.logout} /> : null }
          <Routes>
            <Route path="/" element={<Splash user={user} />} />
            {/* <Route path="/other" element={<Other />} /> */}
            <Route path="/signup" element={<Signup handleSignUp={this.handleSignUp} user={user} />} />
            <Route path="/login" element={<Login handleAuth={this.handleAuth} user={user} />} />
            {/* {user ? <Route path="/main" element={<Main />} /> : null} */}
            <Route path="/main" element={<Main />} />
            <Route path="/requestStatus" element={<RequestStatus />} />
            <Route path="/runnerList" element={<RunnerList />} />
            {/* <Route path="/requestDash" element={<RunnerList />} /> */}
            <Route path="/runnerDash" element={<RunnerDash destinations={testData} handlePostRun={this.handlePostRun} />} />
            <Route path="/runnerStatus" element={<RunnerStatus />} />
            <Route path="/other" element={<Other />} />
            <Route path="/profile" element={<ProfilePopover />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
