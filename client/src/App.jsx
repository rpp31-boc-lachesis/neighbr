import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Splash/Navbar.jsx';
import Splash from './components/Splash/Splash.jsx';
import Main from './components/Home/Main.jsx';
import Other from './components/Other.jsx';
import Error from './components/Error.jsx';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/main" element={<Main />} />
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
