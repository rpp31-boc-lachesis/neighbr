import { render } from '@testing-library/react';
import React from 'react';
import {
  MemoryRouter
} from 'react-router-dom';
import Login from '../../client/src/components/Splash/Login.jsx';

const handleSignin = () => {
  const nothing = {};
  return nothing;
};

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => mockedUsedNavigate,
}));

describe('<Login />', () => {
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