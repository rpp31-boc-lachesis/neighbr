import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React Working!'
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Typography variant="h1" color="powderblue" align="center">
          {title}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={() => console.log('Click!')}>
            Click Me!
          </Button>
        </Box>
      </div>
    );
  }
}

export default App;
