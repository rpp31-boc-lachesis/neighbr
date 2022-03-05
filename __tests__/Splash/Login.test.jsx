import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../client/src/App.jsx';
import Login from '../../client/src/components/Splash/Login.jsx';
import Main from '../../client/src/components/Home/Main.jsx';

const handleSignin = () => {
  const nothing = {};
  return nothing;
};

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => mockedUsedNavigate,
}));

xdescribe('Unit test', () => {
  it('Renders Login Form component', () => {
    const user = 'test';
    const component = render(
      <MemoryRouter>
        <Login user={user} handleSignin={handleSignin} />
      </MemoryRouter>
    );
    expect(component).toBeDefined();
  });
});

describe('Functional test', () => {
  it('The user should be navigated to the main page after valid entry and clicking the Login button.', () => {
    const user = 'valid';
    render(
        <App user={user} handleSignin={handleSignin} />
    );
    userEvent.click(screen.getByRole('button', { name: /LOG IN/i }));

    expect(screen.getByTestId('main-display')).toBeInTheDocument();

  });
  // it('Displays error message that should appear on an invalid entries.', () => {

  // });
  // it('Can an unauthenticated user log in?', () => {
  // });

});
// npm run test Login.test.jsx
