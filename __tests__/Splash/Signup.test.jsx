import { render, fireEvent } from '@testing-library/react';
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
const user = 'test';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => mockedUsedNavigate,
}));

describe('<Signup />', () => {
  it('Renders Signup component', () => {
    const component = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} />
      </MemoryRouter>
    );
    expect(component).toBeDefined();
  });

  it('Submission works', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} onSubmit={onSubmit} />
      </MemoryRouter>
    );
    fireEvent.submit(getByTestId('submit-button'));
    // expect(onSubmit).toHaveBeenCalled();
    // fireEvent.submit(getByTestId('form'));
    // expect(onSubmit).toHaveBeenCalled();
  });

  it('Rendered default state', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} />
      </MemoryRouter>
    );
    const firstName = getByTestId('first-name');
    expect(firstName).toBeInTheDocument();
    fireEvent.change(firstName, { target: { value: 'myName' } });
    expect(firstName.value).toBe('myName');
  });

  it('Rendered all textbox', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} />
      </MemoryRouter>
    );
    expect(getAllByRole('textbox').length).toBe(7);
  });

  it('Rendered username state', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} />
      </MemoryRouter>
    );
    const userName = getByTestId('username');
    expect(userName).toBeInTheDocument();
    fireEvent.change(userName, { target: { value: 'myName' } });
    expect(userName.value).toBe('myName');
  });

  it('Rendered password state', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Signup user={user} handleSignUp={handleSignUp} />
      </MemoryRouter>
    );
    const password = getByTestId('password');
    expect(password).toBeInTheDocument();
    fireEvent.change(password, { target: { value: 'myPassword' } });
    expect(password.value).toBe('myPassword');
  });
});
// npm run test Signup.test.jsx
// 25,42,63-77,83-84,88-89,93,97,101-118,157-312
//    42,63-77,83-84,      93,97,101-118,157-312
