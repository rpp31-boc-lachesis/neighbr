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
// npm run test Login.test.jsx
