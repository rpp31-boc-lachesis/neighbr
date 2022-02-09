import { render } from '@testing-library/react';
import React from 'react';
import App from '../client/src/App';
// import '@testing-library/jest-dom/extend-expect';

describe('<App />', () => {
  test('Renders App component', () => {
    const component = render(<App />);
    expect(component).toBeDefined();
  });
});
