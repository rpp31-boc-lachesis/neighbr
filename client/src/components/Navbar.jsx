import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Navbar ||
        {' '}
        <Link to="/">
          Home
        </Link>
        {' '}
        || Login || Sign Up
      </div>
    );
  }
}

export default Navbar;
