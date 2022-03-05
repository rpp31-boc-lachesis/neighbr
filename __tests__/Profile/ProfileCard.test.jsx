import React from 'react';
import 'regenerator-runtime/runtime';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import ProfileCard from '../../client/src/components/Profile/ProfileCard.jsx';

const mockHandleClose = jest.fn();
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
const mockCurrentUser = {
  coordinates: {
    lat: '37.79900926208563',
    long: '-122.44954681590492'
  },
  _id: '621d83f306fce7ac61df6eb0',
  first_name: 'Solomon',
  last_name: 'Neighbors',
  username: 'superneighbr',
  email: 'superneighbr@gmail.com',
  avatar_url: 'https://randomuser.me/api/portraits/men/17.jpg',
  street_address: '1 Letterman Dr',
  city: 'San Francisco',
  state: 'CA',
  zip: '94129',
  country: 'US',
  bio: "Hi, Neighbr! I love living an active lifestyle and building community! It seems like I always have an errand to run, so please let me know if I can pick up any items for you while I'm out. I hope to hear from you soon!",
  req_history: [
    {
      pickup: {
        locationId: {
          _id: '62196eb6525248e157c4b819',
          mapboxId: 'poi.944892807890',
          placeText: 'Chowders',
          placeName: 'Chowders, Pier 39, San Francisco, California 94133, United States',
          address: 'Pier 39',
          category: 'american restaurant, american food, restaurant',
          neighborhood: "Fisherman's Wharf",
          postcode: '94133',
          coordinates: [
            -122.410059,
            37.809092
          ],
          region: 'California',
          district: 'San Francisco',
          country: 'United States',
          place: 'San Francisco',
          runs: [
            '62196eb7525248e157c4b81e',
            '621d2d8d622ce1c44a5b5ffa'
          ],
          errands: [],
          __v: 2
        }
      },
      _id: '621d9129f6a89d95f9fe3239',
      accepted: false,
      requester: '621d83f306fce7ac61df6eb0',
      req_items: [
        {
          item: 'Beer - Guiness',
          quantity: 13,
          status: 'In-Progress',
          _id: '621938a2bb75f3b294948306'
        }
      ],
      weight: '16 lbs',
      size: 'l',
      message: 'In drumstick duis pariatur dolore, elit enim nisi quis.',
      date: '2022-02-25T20:14:25.539Z',
      start_time: '2022-02-25T20:14:25.539Z',
      end_time: '2022-02-25T20:14:25.539Z'
    },
    {
      pickup: {
        locationId: {
          _id: '621936e83005a44ebc20de6c',
          mapboxId: 'poi.1108101579627',
          placeText: 'Mission Fiesta Laundry',
          placeName: 'Mission Fiesta Laundry, 5756 Mission St, San Francisco, California 94112, United States',
          address: '5756 Mission St',
          category: 'laundromat, shop',
          neighborhood: 'Outer Mission',
          postcode: '94112',
          coordinates: [
            -122.450468,
            37.709863
          ],
          region: 'California',
          district: 'San Francisco',
          country: 'United States',
          place: 'San Francisco',
          runs: [
            '621936e83005a44ebc20de87'
          ],
          errands: [
            '621938ced4cc29017923cb5b',
            '621938f2d4cc29017923cb96'
          ],
          __v: 1
        }
      },
      _id: '621edc8507e7cf7675390964',
      accepted: false,
      requester: '621d83f306fce7ac61df6eb0',
      req_items: [
        {
          item: 'Beans - Black Bean, Canned',
          quantity: 10,
          status: 'In-Progress',
          _id: '621edc8507e7cf7675390965'
        }
      ],
      weight: '5 lbs',
      size: 'l',
      message: 'Prosciutto short loin esse aute ball tip pariatur frankfurter.',
      date: '2022-03-02T02:55:00.022Z',
      start_time: '2022-03-02T02:55:00.022Z',
      end_time: '2022-03-02T02:55:00.022Z',
      __v: 0
    },
    {
      pickup: {
        locationId: {
          _id: '6215b536197cf88d2bec9524',
          mapboxId: 'poi.137438995596',
          placeText: 'Animal Farm Pet Hospital',
          placeName: 'Animal Farm Pet Hospital, 5601 Mission St, San Francisco, California 94112, United States',
          address: '5601 Mission St',
          category: 'veterinary, veterinarian, vet, pet, dog, cat',
          neighborhood: 'Crocker Amazon',
          postcode: '94112',
          coordinates: [
            -122.44653,
            37.711125
          ],
          region: 'California',
          district: 'San Francisco',
          country: 'United States',
          place: 'San Francisco',
          runs: [
            '6215b536197cf88d2bec9526'
          ],
          errands: [
            '6216bf1eb510771e3d97e58e',
            '621edc8507e7cf7675390967'
          ],
          __v: 1
        }
      },
      _id: '621edc8507e7cf7675390967',
      accepted: false,
      requester: '621d83f306fce7ac61df6eb0',
      req_items: [
        {
          item: 'Carbonated Water - Strawberry',
          quantity: 6,
          status: 'In-Progress',
          _id: '621edc8507e7cf7675390968'
        }
      ],
      weight: '58 lbs',
      size: 'xxl',
      message: 'Shankle beef voluptate commodo chicken doner. Sirloin prosciutto minim sed tail, tongue frankfurter bacon voluptate excepteur. Turkey andouille chicken, elit beef drumstick cupim boudin flank duis. Fatback commodo enim ball tip pancetta, tenderloin pork. Tempor ut lorem fugiat laborum. Pancetta chuck spare ribs, do dolore fatback prosciutto venison voluptate brisket elit turkey qui shank. Veniam nulla qui excepteur, eu leberkas ham hock ipsum pig nisi kevin frankfurter.',
      date: '2022-03-02T02:54:59.962Z',
      start_time: '2022-03-02T02:54:59.962Z',
      end_time: '2022-03-02T03:54:59.962Z',
      __v: 0
    }
  ],
  run_history: [
    {
      _id: '621d9074f6a89d95f9fe322d',
      complete: false,
      location: {
        _id: '621936b33005a44ebc20ddc6',
        mapboxId: 'poi.695784710540',
        placeText: 'T-Mobile',
        placeName: 'T-Mobile, 4621 Mission St, San Francisco, California 94112, United States',
        address: '4621 Mission St',
        category: 'computer, electronic, electronics, shop',
        neighborhood: 'Excelsior',
        postcode: '94112',
        coordinates: [
          -122.43481,
          37.724235
        ],
        region: 'California',
        district: 'San Francisco',
        country: 'United States',
        place: 'San Francisco',
        runs: [
          '621936b33005a44ebc20dde5'
        ],
        errands: [
          '621938d6d4cc29017923cb6f'
        ],
        __v: 1
      },
      user: '621d83f306fce7ac61df6eb0',
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
      _id: '621edfb1f0e4839f95ed153a',
      complete: false,
      location: {
        _id: '62187306eb7bcd9c52235888',
        mapboxId: 'poi.1030792165970',
        placeText: 'Andytown Roastery',
        placeName: 'Andytown Roastery, 3016 Taraval St, San Francisco, California 94116, United States',
        address: '3016 Taraval St',
        category: 'coffee, cafe',
        neighborhood: 'Outer Parkside',
        postcode: '94116',
        coordinates: [
          -122.498566,
          37.742142
        ],
        region: 'California',
        district: 'San Francisco',
        country: 'United States',
        place: 'San Francisco',
        runs: [
          '62187306eb7bcd9c522358a7',
          '621936bd3005a44ebc20ddf5'
        ],
        errands: [
          '621938a2bb75f3b294948305'
        ],
        __v: 2
      },
      user: '621d83f306fce7ac61df6eb0',
      date: '2022-02-26T20:03:02.000Z',
      startTime: '2022-02-25T15:00:02.721Z',
      endTime: '2022-02-25T23:00:02.721Z',
      transportation: 'car',
      acceptedErrands: [],
      declinedErrands: [],
      completedErrands: []
    },
    {
      _id: '621edfcaf0e4839f95ed153b',
      complete: false,
      location: {
        _id: '621936e83005a44ebc20de6c',
        mapboxId: 'poi.1108101579627',
        placeText: 'Mission Fiesta Laundry',
        placeName: 'Mission Fiesta Laundry, 5756 Mission St, San Francisco, California 94112, United States',
        address: '5756 Mission St',
        category: 'laundromat, shop',
        neighborhood: 'Outer Mission',
        postcode: '94112',
        coordinates: [
          -122.450468,
          37.709863
        ],
        region: 'California',
        district: 'San Francisco',
        country: 'United States',
        place: 'San Francisco',
        runs: [
          '621936e83005a44ebc20de87'
        ],
        errands: [
          '621938ced4cc29017923cb5b',
          '621938f2d4cc29017923cb96'
        ],
        __v: 1
      },
      user: '621d83f306fce7ac61df6eb0',
      date: '2022-02-26T20:03:02.000Z',
      startTime: '2022-02-25T15:00:02.721Z',
      endTime: '2022-02-25T23:00:02.721Z',
      transportation: 'car',
      acceptedErrands: [],
      declinedErrands: [],
      completedErrands: []
    },
    {
      _id: '621edfebf0e4839f95ed153c',
      complete: false,
      location: {
        _id: '62197662c6f8b47b9d78e80d',
        mapboxId: 'poi.1073741852767',
        placeText: 'Buena Vista Park',
        placeName: 'Buena Vista Park, Buena Vista Ave, San Francisco, California 94117, United States',
        address: 'Buena Vista Ave',
        category: 'historic site, historic',
        neighborhood: 'Buena Vista Park',
        postcode: '94117',
        coordinates: [
          -122.440706,
          37.7686155
        ],
        region: 'California',
        district: 'San Francisco',
        country: 'United States',
        place: 'San Francisco',
        runs: [
          '62197662c6f8b47b9d78e810'
        ],
        errands: [],
        __v: 1
      },
      user: '621d83f306fce7ac61df6eb0',
      date: '2022-02-26T20:03:02.000Z',
      startTime: '2022-02-25T15:00:02.721Z',
      endTime: '2022-02-25T23:00:02.721Z',
      transportation: 'car',
      acceptedErrands: [],
      declinedErrands: [],
      completedErrands: []
    }
  ],
  __v: 0,
  dob: '1988-04-01T05:23:55.326Z',
  age: 33,
  sum_rating: 10,
  rating_count: 2.5,
  created_at: '2022-02-16T09:16:36-08:00'
};

describe('<ProfileCard />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileCard
            handleClose={mockHandleClose}
            currentUser={mockCurrentUser}
            themeColor="primary"
          />
        </Router>
      </ThemeProvider>
    );
  });

  it('Renders Profile Card component', async () => {
    await expect(component).toBeDefined();
  });
  it('Has an X button to close the modal', async () => {
    const closeButton = await screen.findByTestId('CloseIcon');
    expect(closeButton).toBeInTheDocument();
  });
  it('Can close the modal by clicking the X button', async () => {
    const closeButton = await screen.findByTestId('CloseIcon');
    fireEvent.click(closeButton);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
  it('Displays a User avatar', async () => {
    const userAvatar = await screen.findByAltText('profile image');
    expect(userAvatar).toBeInTheDocument();
  });
  it('Displays a User name', async () => {
    const userNameDisplay = await screen.findByRole('heading', {
      name: 'Solomon'
    });
    expect(userNameDisplay).toBeInTheDocument();
  });
  it('Displays a User location', async () => {
    const userLocationDisplay = await screen.findByRole('heading', {
      name: 'San Francisco'
    });
    expect(userLocationDisplay).toBeInTheDocument();
  });
  it('Shows current user rating', async () => {
    const userRating = await screen.findByLabelText(/stars/i);
    expect(userRating).toBeInTheDocument();
  });
  it('Displays a User biography', async () => {
    const userBioDisplay = await screen.findByRole('heading', {
      name: mockCurrentUser.bio
    });
    expect(userBioDisplay).toBeInTheDocument();
  });
  it('Displays previous Runs or Requests', async () => {
    const userBioDisplay = await screen.findByRole('heading', {
      name: mockCurrentUser.bio
    });
    expect(userBioDisplay).toBeInTheDocument();
  });
  it('Displays secondary color theme when given secondary themeColor prop', async () => {
    const secondaryTheme = render(
      <ThemeProvider theme={theme}>
        <Router>
          <ProfileCard
            handleClose={mockHandleClose}
            currentUser={mockCurrentUser}
            themeColor="secondary"
          />
        </Router>
      </ThemeProvider>
    );
    const runnerLocations = await screen.findAllByText(/location/i);
    expect(secondaryTheme).toBeDefined();
    expect(runnerLocations[0]).toHaveTextContent('Location');
  });
});
