import { rest } from 'msw';

// const { PRODUCTION_URL } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get('/locations', (req, res, ctx) => (
    res(
      ctx.json([{}])
    )
  )),
  rest.get('/runs', (req, res, ctx) => (
    res(
      ctx.json([{}])
    )
  )),
  rest.get('/users/:username', (req, res, ctx) => (
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
        }
      ])
    )
  )),
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
  )),
  rest.get('/errands', (req, res, ctx) => (
    res(
      ctx.json([{}])
    )
  ))
];
