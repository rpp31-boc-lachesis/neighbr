import React from 'react';
import 'regenerator-runtime/runtime';
import {
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import ProfilePopover from '../../client/src/components/Profile/ProfilePopover.jsx';
import ProfileCard from '../../client/src/components/Profile/ProfileCard.jsx';

const tempUser = 'purplerabbit400';
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
  req_history: [{
    _id: {
      $oid: '621938a2bb75f3b294948305'
    },
    accepted: false,
    requester: {
      $oid: '620d3174fcabcc778c98c589'
    },
    req_items: [{
      item: 'Beer - Guiness',
      quantity: 13,
      status: 'In-Progress',
      _id: {
        $oid: '621938a2bb75f3b294948306'
      }
    }],
    weight: '16 lbs',
    size: 'l',
    message: 'In drumstick duis pariatur dolore.',
    pickup: {
      locationId: {
        $oid: '62187306eb7bcd9c52235888'
      }
    },
    date: {
      $date: '2022-02-25T20:14:25.539Z'
    },
    start_time: {
      $date: '2022-02-25T20:14:25.539Z'
    },
    end_time: {
      $date: '2022-02-25T20:14:25.539Z'
    },
    __v: 0
  },
  {
    _id: {
      $oid: '621938a9bb75f3b294948309'
    },
    accepted: false,
    requester: {
      $oid: '620d3174fcabcc778c98c58c'
    },
    req_items: [{
      item: 'Tandoori Curry Paste',
      quantity: 7,
      status: 'In-Progress',
      _id: {
        $oid: '621938a9bb75f3b29494830a'
      }
    }],
    weight: '20 lbs',
    size: 'xxxl',
    message: 'Pork belly veniam bresaola.',
    pickup: {
      locationId: {
        $oid: '6216936ce9e6d066e501a1cf'
      }
    },
    date: {
      $date: '2022-02-25T20:14:32.885Z'
    },
    start_time: {
      $date: '2022-02-25T20:14:32.885Z'
    },
    end_time: {
      $date: '2022-02-25T20:14:32.885Z'
    },
    __v: 0
  }],
  run_history: [{
    _id: {
      $oid: '6219366ed26725848ffec9a5'
    },
    complete: false,
    location: {
      $oid: '6215b1edc9e1388f59d55461'
    },
    user: {
      $oid: '62128765d1b37ad1f5620a80'
    },
    date: '2022-02-26T20:03:02.000Z',
    startTime: '2022-02-25T15:00:02.721Z',
    endTime: '2022-02-25T23:00:02.721Z',
    transportation: 'car',
    acceptedErrands: [],
    declinedErrands: [],
    completedErrands: [],
    __v: 0
  },
  {
    _id: {
      $oid: '62193679d26725848ffec9e3'
    },
    complete: false,
    location: {
      $oid: '6215b509197cf88d2bec9517'
    },
    user: {
      $oid: '62128765d1b37ad1f5620a80'
    },
    date: '2022-02-26T20:03:02.000Z',
    startTime: '2022-02-25T15:00:02.721Z',
    endTime: '2022-02-25T23:00:02.721Z',
    transportation: 'car',
    acceptedErrands: [],
    declinedErrands: [],
    completedErrands: [],
    __v: 0
  }],
  __v: 0
};
const theme = responsiveFontSizes(createTheme({
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
}));

describe('<ProfilePopover />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfilePopover
            user={tempUser}
            themeColor="primary"
          >
            <ProfileCard
              handleClose={mockHandleClose}
              currentUser={mockCurrentUser}
              themeColor="primary"
            />
          </ProfilePopover>
        </Router>
      </ThemeProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders Profile Popover component', async () => {
    await expect(component).toBeDefined();
  });
  it('Renders view profile button', async () => {
    const viewProfileButton = await screen.findByRole('button', {
      name: /view profile/i
    });
    expect(viewProfileButton).toBeInTheDocument();
  });
  it('Popover opens when button is clicked', async () => {
    screen.debug();
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
