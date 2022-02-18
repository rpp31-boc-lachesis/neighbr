import { render } from '@testing-library/react';
import React from 'react';
import ProfilePopover from '../../client/src/components/ProfilePopover.jsx';

describe('<ProfilePopover />', () => {
  it('Renders Profile Popover component', () => {
    const component = render(<ProfilePopover />);
    expect(component).toBeDefined();
  });
});
