import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import testData from '../../client/src/components/RunnerDash/data.js';
import RunnerDash from '../../client/src/components/RunnerDash/RunnerDash.jsx';
// import searchLocation from '../../client/src/components/RunnerDash/searchLocation.js';

const mockPostRun = jest.fn();
const mockRefreshData = jest.fn();
const { runs, errands, locations } = testData;
// const searchLocation = jest.fn();

let theme = createTheme({
  palette: {
    primary: {
      main: '#C85CDB',
    },
    secondary: {
      main: '#5FC6C9',
    },
  },
  typography: {
    fontFamily: 'Roboto'
  },
});

theme = responsiveFontSizes(theme);

describe('Run Dashboard', () => {
  beforeAll(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  test('renders the Runner Dashboard', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RunnerDash lastRun={{}} runs={runs} user="jake" errands={errands} locations={locations} handlePostRun={mockPostRun} refreshData={mockRefreshData} />
        </Router>
      </ThemeProvider>
    );
    expect(screen.getByRole('heading', { name: 'Current Runs' })).toHaveTextContent('Current Runs');
    expect(screen.getByRole('heading', { name: 'Completed Runs' })).toHaveTextContent('Completed Runs');
    expect(screen.getByRole('button')).toHaveTextContent('Post New Run');
  });
  test('shows errand cards after clicking on run', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RunnerDash lastRun={{}} runs={runs} user="jake" errands={errands} locations={locations} handlePostRun={mockPostRun} refreshData={mockRefreshData} />
        </Router>
      </ThemeProvider>
    );
    const targetRun = screen.getByRole('heading', { name: 'Ghirardelli Square' });

    expect(targetRun).toBeVisible();
    fireEvent.click(targetRun);
    const user1 = screen.getByRole('heading', { name: 'crazyswan889' });
    const user2 = screen.getByRole('heading', { name: 'organicrabbit525' });
    const user3 = screen.getByRole('heading', { name: 'tinybird439' });
    expect(user1).toBeVisible();
    expect(user2).toBeVisible();
    expect(user3).toBeVisible();
    fireEvent.click(screen.getAllByRole('button', { name: 'Yes' })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: 'No' })[0]);
  });
  test('opens run entry modal', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RunnerDash lastRun={{}} runs={runs} user="jake" errands={errands} locations={locations} handlePostRun={mockPostRun} refreshData={mockRefreshData} />
        </Router>
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: 'Post New Run' }));
    screen.findByRole('heading', { name: 'Enter Your Run' })
      .then((element) => {
        expect(element).toBeVisible();
      })
      .then(() => {
        userEvent.type(screen.getByRole('textbox', { name: 'Zip code' }), '940');
        userEvent.type(screen.getByRole('textbox', { name: 'Zip code' }), '16');
        userEvent.type(screen.getByRole('textbox', { name: 'Add a location' }), 'Grace{space}Cathedral');
        userEvent.type(screen.getByRole('textbox', { name: /Choose date,.*/ }), '03/01/2023');
        userEvent.type(screen.getByRole('textbox', { id: 'mui-6' }), '11:01');
        userEvent.type(screen.getByRole('textbox', { id: 'mui-8' }), '11:59');
        userEvent.type(screen.getByRole('textbox', { name: 'Transportation' }), 'Car');
        userEvent.click(screen.getByRole('button'), { name: 'Submit Run' });
      })
      .catch((err) => {
        console.error(err);
      });
  })
});
