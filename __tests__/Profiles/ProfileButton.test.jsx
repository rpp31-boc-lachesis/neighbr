import { render, screen } from '@testing-library/react';
import React from 'react';
import ProfileButton from '../../client/src/components/ProfileButton.jsx';

const mockHandleClick = () => {
  const nothing = {};
  return nothing;
};

describe('<ProfileButton />', () => {
  it('Renders Profile Button component', () => {
    const component = render(<ProfileButton handleClick={mockHandleClick} />);
    expect(component).toBeDefined();
  });
  it('Should be enabled', () => {
    render(<ProfileButton handleClick={mockHandleClick} />);
    const viewProfileText = screen.getByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toBeEnabled();
  });
  it('Has correct text to view profile', () => {
    render(<ProfileButton handleClick={mockHandleClick} />);
    const viewProfileText = screen.getByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText.textContent).toBe('View Profile');
  });
  it('Has correct theme color', () => {
    render(<ProfileButton handleClick={mockHandleClick} />);
    const viewProfileText = screen.getByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileText).toHaveStyle({ backgroundColor: 'primary' });
  });
});
