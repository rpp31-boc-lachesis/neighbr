import 'regenerator-runtime/runtime';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from '../../client/src/components/Home/Header.jsx';

function MockHeader() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe('Unit test', () => {
  it('Renders navigation header properly on top of the page', () => {
    render(
      <MockHeader />
    );
    expect(screen.queryByRole('banner')).toBeInTheDocument();
    expect(screen.queryByTestId('MenuIcon')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Neighbr' })).toBeInTheDocument();
  });
  it('Renders a navigation-pane, upon clicking hamburger button', async () => {
    render(
      <MockHeader />
    );
    const hamburger = screen.getByRole('button', { name: /open drawer/i });
    userEvent.click(hamburger);

    const menuItems = await screen.findAllByRole('button');
    expect(menuItems.length).toBe(5);
    expect(await screen.findByText(/home/i)).toBeInTheDocument();
    expect(await screen.findByText(/post your run/i)).toBeInTheDocument();
    expect(await screen.findByText(/find your run/i)).toBeInTheDocument();
    expect(await screen.findByText(/requester/i)).toBeInTheDocument();
  });
  it('Renders a user dropdown menu, upon clicking avatar button', async () => {
    render(
      <MockHeader />
    );
    const avatar = screen.getByTestId('right-menu');
    userEvent.click(avatar);

    expect(await screen.findByRole('menu')).toBeInTheDocument();
  });
});

xdescribe('Integration test', () => {
  it('Links user to corresponding pages upon clicking menus', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header user={user} userPhoto={photo} logout={mockLogout} />
      </Router>
    );
    const hamburger = screen.getByRole('button', { name: /open drawer/i });
    userEvent.click(hamburger);
    userEvent.click(screen.getByText(/Find Your Runner/i));
    expect(history.location.pathname).toBe('/runnerDash');
    // expect(await screen.findByRole('heading', { name: /current runs/i })).toBeInTheDocument();
  });

  // it('Logs out user upon clicking Logout on the menu', () => {

  // });
});
