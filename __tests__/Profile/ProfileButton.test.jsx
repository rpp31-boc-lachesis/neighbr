import React from 'react';
import 'regenerator-runtime/runtime';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import ProfileButton from '../../client/src/components/Profile/ProfileButton.jsx';

const mockHandleClick = jest.fn();
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

describe('<ProfileButton />', () => {
  it('Renders Profile Button component', async () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileButton
            handleClick={mockHandleClick}
            themeColor="primary"
          />
        </Router>
      </ThemeProvider>
    );
    await expect(component).toBeDefined();
  });
  it('Should be enabled', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileButton
            handleClick={mockHandleClick}
            themeColor="primary"
          />
        </Router>
      </ThemeProvider>
    );
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toBeEnabled();
  });
  it('Has correct text to view profile', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileButton
            handleClick={mockHandleClick}
            themeColor="primary"
          />
        </Router>
      </ThemeProvider>
    );
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText.textContent).toBe('View Profile');
  });
  it('Has correct theme color when primary', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileButton
            handleClick={mockHandleClick}
            themeColor="primary"
          />
        </Router>
      </ThemeProvider>
    );
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toHaveStyle({ backgroundColor: 'primary' });
  });
  it('Has correct theme color when secondary', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileButton
            handleClick={mockHandleClick}
            themeColor="secondary"
          />
        </Router>
      </ThemeProvider>
    );
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toHaveStyle({ backgroundColor: 'secondary' });
  });
});
