import React from 'react';
import 'regenerator-runtime/runtime';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Error from '../../client/src/components/Error.jsx';

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

describe('<Error />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Error />
        </Router>
      </ThemeProvider>
    );
  });
  it('Renders Error page', () => {
    expect(component).toBeDefined();
  });
  it('Greets the user in a friendly way', () => {
    const helloText = screen.getByRole('heading', {
      name: /hello/i
    });
    const neighbrText = screen.getByRole('heading', {
      name: /neighbr/i
    });
    expect(helloText).toBeInTheDocument();
    expect(neighbrText).toBeInTheDocument();
  });
  it('Displays the Neighbr color themes', () => {
    const helloText = screen.getByRole('heading', {
      name: /hello/i
    });
    const neighbrText = screen.getByRole('heading', {
      name: /neighbr/i
    });
    expect(helloText).toHaveStyle({ color: 'rgb(95, 198, 201)' });
    expect(neighbrText).toHaveStyle({ color: 'rgb(200, 92, 219)' });
  });
});
