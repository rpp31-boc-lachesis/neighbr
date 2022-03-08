import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../client/src/components/Home/Header.jsx';

const mockLogout = jest.fn();

xdescribe('Unit test', () => {
  const user = 'validUser';
  const photo = 'https://randomuser.me/api/portraits/women/31.jpg';
  it('Renders navigation header properly on top of the page', () => {
    render(
      <MemoryRouter>
        <Header user={user} userPhoto={photo} logout={mockLogout} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    expect(screen.queryByTestId('MenuIcon')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Neighbr' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: user })).toBeInTheDocument();
  });
});

describe('Integration test', () => {
  it('Links user to corresponding pages upon clicking menus on the navigation drop-down.', () => {
    // profilemain
    // main
    // runnerDash
    // runnerList
  });

  it('Logs out user upon clicking Logout on the menu', () => {

  });
});
