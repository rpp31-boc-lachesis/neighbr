import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import testData from '../../client/src/components/RunnerDash/data.js';
import RunnerDash from '../../client/src/components/RunnerDash/RunnerDash.jsx';
import searchLocation from '../../client/src/components/RunnerDash/searchLocation.js';
import testLocationSearch from '../../client/src/components/RunnerDash/testLocationSearch.js';

const mockPostRun = jest.fn(async () => testLocationSearch);
const mockRefreshData = jest.fn();
const { runs, errands, locations } = testData;

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
    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: 'Yes' })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: 'No' })[0]);
  });
  test('searchLocation works', () => {
    searchLocation('test', [1, 1])
      .then((response) => {
        const responseId = response.data.features[0].id;
        expect(responseId).toBe('poi.661425015052');
      })
      .catch((err) => { console.error(err); });
  });
});

describe('RunnerDash Modal', () => {
  test('opens run entry modal', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RunnerDash lastRun={{}} runs={runs} user="jake" errands={errands} locations={locations} handlePostRun={mockPostRun} refreshData={mockRefreshData} />
        </Router>
      </ThemeProvider>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Post New Run' }));
    const enterRun = await screen.findByRole('heading', { name: 'Enter Your Run' });
    await expect(enterRun).toHaveTextContent('Enter Your Run');
    const zip = await screen.findByRole('textbox', { name: 'Zip code' });
    await userEvent.type(zip, '940');
    await userEvent.keyboard('16');
    await userEvent.type(screen.getByRole('textbox', { name: 'Add a location' }), 'Grace{space}Cathedral');
    userEvent.click(screen.getByRole('button', { name: 'Submit Run' }));
    expect(mockPostRun.mock.calls.length).toBe(1);
    expect(mockRefreshData.mock.calls.length).toBe(2);
  });
});
