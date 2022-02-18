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
import ProfilePopover from './components/ProfilePopover.jsx';
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
  },
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      destinations: [],
      isLoggedIn: false,
      isLoaded: false,
      locations: [],
      runs: [],
      users: [],
      errands: [],
    };
    this.handlePostRun = this.handlePostRun.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    const { locations, runs, users, errands } = this.state;
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
      axios.get('/users')
        .then((res) => res.data)
        .then(
          (result) => {
            if (Array.isArray(result)) {
              const oldArr = [...users];
              this.setState({ users: [...oldArr, ...result] });
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

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { error, isLoaded, isLoggedIn, destinations, locations, users, runs } = this.state;
    if (error) {
      return <Error />;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
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
            <Route path="/runnerDash" element={<RunnerDash destinations={destinations} runs={runs} users={users} locations={locations} handlePostRun={this.handlePostRun} />} />
            <Route path="/runnerStatus" element={<RunnerStatus />} />
            <Route path="/profile" element={<ProfilePopover />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
