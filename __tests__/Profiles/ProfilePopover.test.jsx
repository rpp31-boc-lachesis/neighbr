import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import ProfilePopover from '../../client/src/components/Profile/Profile.jsx';

const tempUser = 'organicrabbit525';

describe('<ProfilePopover />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ProfilePopover
        user={tempUser}
      />
    );
  });
  it('Renders Profile Popover component', () => {
    expect(component).toBeDefined();
  });
  it('Renders view profile button', async () => {
    const viewProfileButton = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileButton).toBeInTheDocument();
  });
  it('Popover opens when button is clicked', async () => {
    const viewProfileButton = await screen.findByRole('button', {
      name: /view profile/i
    });
    fireEvent.click(viewProfileButton);
    const userNameDisplay = await screen.findByRole('heading', {
      name: 'Darryl'
    });
    expect(userNameDisplay).toBeInTheDocument();
  });
});
