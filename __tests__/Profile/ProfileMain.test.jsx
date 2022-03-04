/* eslint-disable quotes */
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
      name: /member/i
    });
    expect(usernameMembership).toHaveTextContent(/member/i);
  });
  it('Displays star rating below membership', async () => {
    const userStarRating = await screen.findByLabelText(/stars/i);
    expect(userStarRating).toBeInTheDocument();
  });
  it(`Shows current user's account number`, async () => {
    const userAccountNumber = await screen.findByText(/account #/i);
    expect(userAccountNumber.textContent).toBe('Account #:');
  });
  it(`Shows current user's first name`, async () => {
    const userFirstName = await screen.findByText(/first name/i);
    expect(userFirstName.textContent).toBe('First Name:');
  });
  it(`Shows current user's last name`, async () => {
    const userFirstName = await screen.findByText(/last name/i);
    expect(userFirstName.textContent).toBe('Last Name:');
  });
  it(`Shows current user's email`, async () => {
    const userFirstName = await screen.findByText(/email/i);
    expect(userFirstName.textContent).toBe('Email:');
  });
  it(`Shows current user's rating`, async () => {
    const userFirstName = await screen.findByText(/rating/i);
    expect(userFirstName.textContent).toBe('Rating:');
  });
  it(`Shows current user's biography`, async () => {
    const userFirstName = await screen.findByText(/bio/i);
    expect(userFirstName.textContent).toBe('Bio:');
  });
  it(`Shows current user's previous runs`, async () => {
    const runsTab = await screen.findByRole('tab', {
      name: /runs/i
    });
    fireEvent.click(runsTab);
    const previousRunsText = await screen.findByText(/my run history/i);
    expect(previousRunsText.textContent).toBe('My Run History:');
  });
  it(`Shows location of a user's runs`, async () => {
    const runsTab = await screen.findByRole('tab', {
      name: /runs/i
    });
    fireEvent.click(runsTab);
    const runLocationText = await screen.findAllByText(/location/i);
    expect(runLocationText[0]).toHaveTextContent('Location');
  });
});
