import React from 'react';
import 'regenerator-runtime/runtime';
import { render, screen } from '@testing-library/react';
import ProfileButton from '../../client/src/components/Profile/Profile.jsx';

const mockHandleClick = jest.fn();

describe('<ProfileButton />', () => {
  it('Renders Profile Button component', () => {
    const component = render(<ProfileButton handleClick={mockHandleClick} />);
    expect(component).toBeDefined();
  });
  it('Should be enabled', async () => {
    render(<ProfileButton handleClick={mockHandleClick} />);
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toBeEnabled();
  });
  it('Has correct text to view profile', async () => {
    render(<ProfileButton handleClick={mockHandleClick} />);
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText.textContent).toBe('View Profile');
  });
  it('Has correct theme color', async () => {
    render(<ProfileButton handleClick={mockHandleClick} />);
    const viewProfileText = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toHaveStyle({ backgroundColor: 'primary' });
  });
});
