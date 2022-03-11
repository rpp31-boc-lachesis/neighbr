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
import LocationAutocomplete from '../../client/src/components/RunnerDash/LocationAutocomplete.jsx';
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

const StateWrapper = function sw(props) {
  const [currentRun, setRun] = React.useState(null);
  return <RunnerDash lastRun={{}} runs={runs} user="jake" errands={errands} currentRun={currentRun} setRun={setRun} locations={locations} handlePostRun={mockPostRun} refreshData={mockRefreshData} />;
};

const LocationStateWrapper = function lsw(props) {
  const [location, setLocation] = React.useState('');
  return <LocationAutocomplete handleLocChange={setLocation} />;
};

describe('Run Dashboard', () => {
  test('renders the Runner Dashboard', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <StateWrapper />
        </Router>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'Current Runs' })).toHaveTextContent('Current Runs');
    expect(screen.getByRole('heading', { name: 'Completed Runs' })).toHaveTextContent('Completed Runs');
    expect(screen.getByRole('button')).toHaveTextContent('Post New Run');
  });
  test('shows errand cards after clicking on run', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <StateWrapper />
        </Router>
      </ThemeProvider>
    );
    const targetRun = await screen.findByRole('heading', { name: 'Ghirardelli Square' });

    expect(targetRun).toBeVisible();
    await fireEvent.click(targetRun);
    const user1 = await screen.findByRole('heading', { name: 'crazyswan889' });
    const user2 = await screen.findByRole('heading', { name: 'organicrabbit525' });
    const user3 = await screen.findByRole('heading', { name: 'tinybird439' });
    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).toBeInTheDocument();
    const yesButton = await screen.findAllByRole('button', { name: 'Yes' });
    const noButton = await screen.findAllByRole('button', { name: 'No' });
    await waitFor(() => fireEvent.click(yesButton[0]));
    await waitFor(() => fireEvent.click(noButton[0]));
  });
  test('searchLocation works', async () => {
    const response = await waitFor(() => searchLocation('test', [1, 1]));
    const responseId = response.data.features[0].id;
    expect(responseId).toBe('poi.661425015052');
  });
});

describe('RunnerDash Modal', () => {
  test('opens run entry modal', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <StateWrapper />
        </Router>
      </ThemeProvider>
    );
    const postButton = await screen.getByRole('button', { name: 'Post New Run' });
    await userEvent.click(postButton);
    const enterRun = await screen.findByRole('heading', { name: 'Enter Your Run' });
    await expect(enterRun).toHaveTextContent('Enter Your Run');
    const zip = await screen.findByRole('textbox', { name: 'Zip code' });
    await waitFor(() => userEvent.type(zip, '9'));
    await userEvent.keyboard('4');
    await userEvent.keyboard('0');
    await userEvent.keyboard('1');
    await userEvent.keyboard('6');
    const locationBox = screen.getByRole('textbox', { name: 'Add a location' });
    await userEvent.type(locationBox, 'Grace{space}Cathedral');
    const submitButton = await screen.getByRole('button', { name: 'Submit Run' });
    await waitFor(() => userEvent.click(submitButton));
    await waitFor(() => expect(mockPostRun.mock.calls.length).toBe(1));
    await waitFor(() => expect(mockRefreshData.mock.calls.length).toBe(3));
  });
});

describe('Location autocomplete', () => {
  test('Location autocomplete gives options', async () => {
    render(<LocationStateWrapper />);
    const input = await screen.findByRole('textbox', {
      name: /add a location/i
    });
    await waitFor(() => userEvent.type(input, 'G'));
    await userEvent.keyboard('r');
    await userEvent.keyboard('a');
    await userEvent.keyboard('c');
    const choice = await screen.findByRole('option', {
      name: /grace cathedral, 1100 california st, san francisco, california 94108, united states/i
    });

    await userEvent.click(choice);
  });
});
