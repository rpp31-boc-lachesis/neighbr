import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Splash/Navbar.jsx';
import Splash from './components/Splash/Splash.jsx';
import Other from './components/Other.jsx';
import RunnerDash from './components/RunnerDash/RunnerDash.jsx';
import Error from './components/Error.jsx';
import testData from './testData'; // temporary test data
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

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
      <React.StrictMode>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/other" element={<Other />} />
            <Route path="/runnerDash" element={<RunnerDash destinations={testData} handlePostDest={this.handlePostDest} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
