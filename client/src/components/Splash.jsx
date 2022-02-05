import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Welcome to Neighbr!
        <br />
        <Link to="/other">Other</Link>
      </div>
    );
  }
}

export default Splash;
