import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import axios from 'axios';
import Splash from './components/Splash/Splash.jsx';
import Header from './components/Home/Header.jsx';
import Footer from './components/Home/Footer.jsx';
import Main from './components/Home/Main.jsx';
import RunnerDash from './components/RunnerDash/RunnerDash.jsx';
import RunnerList from './components/RunnerList/RunnerList.jsx';
import RequestDash from './components/RequestDashActual/RequestDash.jsx';
import RequestStatus from './components/RequestStatus/RequestStatus.jsx';
import RunnerStatus from './components/RunnerStatus/RunnerStatus.jsx';
import Error from './components/Error.jsx';
import testData from './testData'; // temporary test data
import Signup from './components/Splash/Signup.jsx';
import Login from './components/Splash/Login.jsx';
import ProfilePopover from './components/Profile/ProfilePopover.jsx';
import ProfileMain from './components/Profile/ProfileMain.jsx';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import TestingMenu from './TestingMenu.jsx';

let theme = createTheme({
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
});

theme = responsiveFontSizes(theme);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      destinations: [],
      user: '',
      userPhoto: '',
      warning: false,
      isLoaded: false,
      locations: [],
      runs: [],
      users: [],
      errands: [],
      lastRun: {},
    };
    this.handlePostRun = this.handlePostRun.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handlelogout = this.handlelogout.bind(this);
    this.refreshData = this.refreshData.bind(this);
  }

  componentDidMount() {
    this.refreshData();
  }

  handlePostRun(run, location) {
    const { user } = this.state;
    const combined = { run, location };
    combined.run.userName = user;
    return axios.post('/runs/post', {
      data: combined,

    })
      .then((r) => r.data.data)
      .then((response) => {
        this.setState({ lastRun: response });
      })
      .catch((err) => console.error(err));
  }

  async handleSignin(loginData) {
    try {
      const res = await axios.post('/login', loginData);
      const { data } = res;
      this.setState({
        user: data.username,
        userPhoto: data.avatar_url
      });
      localStorage.setItem('user', data.username);
      localStorage.setItem('userphoto', data.avatar_url);
      this.setState({ warning: false });
    } catch (e) {
      this.setState({ warning: true });
    }
  }

  async handlelogout() {
    await axios.get('/logout');
    this.setState({
      user: '',
      userPhoto: ''
    });
    localStorage.removeItem('user');
    localStorage.removeItem('userphoto');
  }

  refreshData() {
    const fetches = [
      axios.get('/locations')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              this.setState(
                { locations: result },
                () => {
                  // eslint-disable-next-line no-console
                  console.log('LOCATIONS:', result);
                }
              );
            }
          },
          (error) => {
            this.setState({ isLoaded: true });
            console.error(error);
          }
        ),
      axios.get('/runs')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              this.setState(
                { runs: result },
                () => {
                  // eslint-disable-next-line no-console
                  console.log('RUNS:', result);
                }
              );
            }
          },
          (error) => {
            this.setState({ isLoaded: true });
            console.error(error);
          }
        ),
      axios.get('/allusers')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              this.setState(
                { users: result },
                () => {
                  // eslint-disable-next-line no-console
                  console.log('USERS:', result);
                }
              );
            }
          },
          (error) => {
            this.setState({ isLoaded: true });
            console.error(error);
          }
        ),
      axios.get('/errands')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              this.setState(
                { errands: result },
                () => {
                  // eslint-disable-next-line no-console
                  console.log('ERRANDS:', result);
                }
              );
            }
          },
          (error) => {
            this.setState({ isLoaded: true });
            console.error(error);
          }
        )
    ];

    Promise.all(fetches)
      .then(this.setState({ isLoaded: true }))
      .catch((err) => {
        this.setState(err);
      });

    this.setState({
      user: localStorage.getItem('user'),
      userPhoto: localStorage.getItem('userphoto')
    });
  }

  render() {
    const { user, userPhoto, warning } = this.state;
    const {
      errands,
      error,
      isLoaded,
      lastRun,
      destinations,
      locations,
      users,
      runs
    } = this.state;

    if (error) {
      return <Error error={error} />;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <ThemeProvider theme={theme}>
        <Router>
          {/* <TestingMenu /> */}
          {(user && window.location.pathname !== '/') ? <Header userPhoto={userPhoto} user={user} logout={this.handlelogout} /> : null }
          <Routes>
            <Route path="/" element={<Splash user={user} />} />
            <Route path="/signup" element={<Signup handleSignin={this.handleSignin} user={user} />} />
            <Route path="/login" element={<Login handleSignin={this.handleSignin} user={user} warning={warning} />} />
            <Route path="/main" element={<Main />} />
            <Route path="/runnerList" element={<RunnerList runs={runs} locations={locations} />} />
            <Route path="/runnerDash" element={<RunnerDash lastRun={lastRun} destinations={destinations} runs={runs} user={localStorage.getItem('user')} users={users} errands={errands} locations={locations} handlePostRun={this.handlePostRun} refreshData={this.refreshData} />} />
            <Route path="/requestDash" element={<RequestDash errands={errands} />} />
            {/* <Route path="/requestDash" element={<RunnerList />} /> */}
            <Route path="/runnerStatus" element={<RunnerStatus errands={errands} runs={runs} user={user} />} />
            <Route path="/requestStatus" element={<RequestStatus user={user} errands={errands} users={users} locations={locations} />} />
            <Route path="/profile" element={<ProfilePopover user={user} themeColor="primary" />} />
            <Route path="/profilemain" element={<ProfileMain user={user} />} />
            <Route path="*" element={<Error />} />
          </Routes>
          {(user && window.location.pathname !== '/') ? <Footer /> : null}
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
