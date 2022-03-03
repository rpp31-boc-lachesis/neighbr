import React from 'react';
import 'regenerator-runtime/runtime';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import ProfileMain from '../../client/src/components/Profile/ProfileMain.jsx';

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

const mockCurrentUser = 'superneighbr';

describe('<Profile Main />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileMain
            user={mockCurrentUser}
          />
        </Router>
      </ThemeProvider>
    );
  });
  it('Renders Profile Main component', async () => {
    await expect(component).toBeDefined();
  });
  it('Renders Profile tab in navigation bar', async () => {
    const profileTab = await screen.findByRole('tab', {
      name: /profile/i
    });
    expect(profileTab).toBeInTheDocument();
  });
  it('Renders Location tab in navigation bar', async () => {
    const locationTab = await screen.findByRole('tab', {
      name: /location/i
    });
    expect(locationTab).toBeInTheDocument();
  });
  it('Renders Runs tab in navigation bar', async () => {
    const runsTab = await screen.findByRole('tab', {
      name: /runs/i
    });
    expect(runsTab).toBeInTheDocument();
  });
  it('Renders Requests tab in navigation bar', async () => {
    const requestsTab = await screen.findByRole('tab', {
      name: /requests/i
    });
    expect(requestsTab).toBeInTheDocument();
  });
  it('Displays User Avatar image', async () => {
    const userAvatar = await screen.findByAltText('User Profile Image');
    expect(userAvatar).toBeInTheDocument();
  });
  it('Displays User name below Avatar', async () => {
    const usernameDisplay = await screen.findByRole('heading', {
      name: /@/i
    });
    expect(usernameDisplay).toHaveTextContent('@superneighbr');
  });
  it('Displays membership below User name', async () => {
    const usernameMembership = await screen.findByRole('heading', {
      name: /Member/i
    });
    expect(usernameMembership).toHaveTextContent('Member since 2022-02-16');
  });
  it('Displays star rating below membership', async () => {
    const userStarRating = await screen.findByLabelText('4 Stars');
    expect(userStarRating).toBeInTheDocument();
  });
});
