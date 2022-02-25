import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileCard from '../../client/src/components/Profile/ProfileCard.jsx';

const mockHandleClose = jest.fn();
const mockCurrentUser = {
  coordinates: {
    lat: '37.79829808740386',
    long: '-122.42878726434952'
  },
  _id: '620d3174fcabcc778c98c594',
  first_name: 'Darryl',
  last_name: 'Gonzales',
  username: 'purplerabbit400',
  email: 'darryl.gonzales@example.com',
  password: 'tigger1',
  avatar_url: 'https://randomuser.me/api/portraits/men/52.jpg',
  street_address: '1801 Green St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94123',
  country: 'USA',
  bio: 'Hey there, my name is Darryl.',
  dob: '1976-07-02T23:04:37.185Z',
  age: 46,
  sum_rating: 5,
  rating_count: 2,
  created_at: '2022-02-16T09:16:36-08:00',
  req_history: [],
  run_history: [],
  __v: 0
};

describe('<ProfileCard />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ProfileCard
        handleClose={mockHandleClose}
        currentUser={mockCurrentUser}
      />
    );
  });

  it('Renders Profile Card component', () => {
    expect(component).toBeDefined();
  });
  it('Has an X button to close the modal', () => {
    const closeButton = screen.getByTestId('CloseIcon');
    expect(closeButton).toBeInTheDocument();
  });
  it('Can close the modal by clicking the X button', () => {
    const closeButton = screen.getByTestId('CloseIcon');
    fireEvent.click(closeButton);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
  it('Displays a User avatar', () => {
    const userAvatar = screen.getByAltText('profile image');
    expect(userAvatar).toBeInTheDocument();
  });
  it('Displays a User name', () => {
    const userNameDisplay = screen.getByRole('heading', {
      name: 'Darryl'
    });
    expect(userNameDisplay).toBeInTheDocument();
  });
  it('Displays a User location', () => {
    const userLocationDisplay = screen.getByRole('heading', {
      name: 'San Francisco'
    });
    expect(userLocationDisplay).toBeInTheDocument();
  });
  it('Displays a User biography', () => {
    const userBioDisplay = screen.getByRole('heading', {
      name: mockCurrentUser.bio
    });
    expect(userBioDisplay).toBeInTheDocument();
  });
});
