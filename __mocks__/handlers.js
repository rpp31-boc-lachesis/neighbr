import { rest } from 'msw';

// const { PRODUCTION_URL } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get('/allusers', (req, res, ctx) => (
    res(
      ctx.json([
        {
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
          bio: '',
          dob: '1976-07-02T23:04:37.185Z',
          age: 46,
          sum_rating: 5,
          rating_count: 2,
          created_at: '2022-02-16T09:16:36-08:00',
          req_history: [],
          run_history: [],
          __v: 0
        },
        {
          coordinates: {
            lat: '37.803945756592654',
            long: '-122.4131201846777'
          },
          _id: '620d3174fcabcc778c98c595',
          first_name: 'Veronica',
          last_name: 'Cunningham',
          username: 'angryrabbit985',
          email: 'veronica.cunningham@example.com',
          password: 'taurus',
          avatar_url: 'https://randomuser.me/api/portraits/women/83.jpg',
          street_address: '850 Columbus Ave',
          city: 'San Francisco',
          state: 'CA',
          zip: '94133',
          country: 'USA',
          bio: '',
          dob: '1993-04-20T11:12:30.037Z',
          age: 29,
          sum_rating: 5,
          rating_count: 2,
          created_at: '2022-02-16T09:16:36-08:00',
          req_history: [],
          run_history: [],
          __v: 0
        },
        {
          coordinates: {
            lat: '37.7518311200275',
            long: '-122.43500000846335'
          },
          _id: '620d3174fcabcc778c98c596',
          first_name: 'Gordon',
          last_name: 'Andrews',
          username: 'blackfrog305',
          email: 'gordon.andrews@example.com',
          password: 'hentai',
          avatar_url: 'https://randomuser.me/api/portraits/men/78.jpg',
          street_address: '451 Jersey St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94114',
          country: 'USA',
          bio: '',
          dob: '1960-10-10T22:01:17.804Z',
          age: 62,
          sum_rating: 5,
          rating_count: 2,
          created_at: '2022-02-16T09:16:36-08:00',
          req_history: [],
          run_history: [],
          __v: 0
        }
      ])
    )
  ))
];
