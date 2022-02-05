import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../client/src/App';
import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';

describe('<App />', () => {
  test('Renders App component', () => {
    const component = render(<App />);
    expect(component).toBeDefined();
  });
  test('Renders title', () => {
    render(<App />);
    const appTitle = screen.getByRole('heading', {
      name: 'React Working!'
    });
    expect(appTitle).toHaveTextContent('React Working!');
  });
  test('Renders clickable button', () => {
    render(<App />);
    const button = screen.getByRole('button', {
      name: 'Click Me!'
    });
    expect(button).toHaveTextContent('Click Me!');
  });
});
