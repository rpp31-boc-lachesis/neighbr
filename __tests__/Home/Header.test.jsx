import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../client/src/components/Home/Header.jsx';

const mockLogout = jest.fn();

describe('Unit test', () => {
  const user = 'validUser';
  const photo = 'https://randomuser.me/api/portraits/women/31.jpg';
  it('Renders header on top of the page', () => {
    render(
      <MemoryRouter>
        <Header user={user} userPhoto={photo} logout={mockLogout} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('banner')).toBeInTheDocument();
  });
  it('Renders navigation drawer', () => {
    render(
      <MemoryRouter>
        <Header user={user} userPhoto={photo} logout={mockLogout} />
      </MemoryRouter>
    );
    expect(screen.queryByTestId('MenuIcon')).toBeInTheDocument();
  });
  it('Renders application logo', () => {
    render(
      <MemoryRouter>
        <Header user={user} userPhoto={photo} logout={mockLogout} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('link', { name: 'Neighbr' })).toBeInTheDocument();
  });
  it('Renders user\'s profile photo', () => {
    screen.debug();
    render(
      <MemoryRouter>
        <Header user={user} userPhoto={photo} logout={mockLogout} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('img', { name: user })).toBeInTheDocument();
  });
});

xdescribe('Integration test', () => {
  it('Renders the user\'s menu with options of logout and profile', () => {
    screen.getByTestId('user-dropdown').toBeVisible();
  });
  it('should render menuitems uplon clicking the avartat', () => {

  })
  it('Renders upon user signing in / signing up', () => {
  });

  it('Renders user\'s profile picture', () => {

  });

  it('Links user to main page upon clicking the logo', () => {

  });

  it('Links user to corresponding pages upon clicking menus on the navigation drop-down.', () => {
    // profilemain
    // main
    // runnerDash
    // runnerList
  });

  it('Logs out user upon clicking Logout on the menu', () => {

  });
});
