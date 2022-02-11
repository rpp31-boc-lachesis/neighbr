import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Picker from './Picker.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header />
        <Picker />
        <Footer />
      </>
    );
  }
}

export default Main;
