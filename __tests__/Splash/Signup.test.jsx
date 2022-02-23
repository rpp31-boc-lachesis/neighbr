import { render } from '@testing-library/react';
import React from 'react';
import {
  MemoryRouter
} from 'react-router-dom';
import Signup from '../../client/src/components/Splash/Signup.jsx';

const handleSignUp = () => {
  const nothing = {};
  return nothing;
};

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => mockedUsedNavigate,
}));

describe('<Signup />', () => {
  it('Renders Signup Form component', () => {
    const user = 'test';
    const component = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} />
      </MemoryRouter>
    );
    expect(component).toBeDefined();
  });
});
// npm run test Signup.test.jsx
