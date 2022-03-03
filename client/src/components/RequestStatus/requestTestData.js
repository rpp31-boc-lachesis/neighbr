const errands = [
  {
    id: btoa('errandOne'),
    category: 'Groceries',
    requester: 12345678910,
    runner: 10987654321,
    reqItems: [
      {
        item: 'Pizza',
        quantity: 3,
        status: 'In-Progress'
      },
      {
        item: 'Cherry tomatoes',
        quantity: 1,
        status: 'Completed'
      },
      {
        item: '12-pack Toilet Paper',
        quantity: 1,
        status: 'Cancelled'
      }
    ],
    weight: '2lbs',
    size: 'Medium',
    transportation: 'Car',
    message: 'You\'re the best! Thank you!',
    pickup: {
      store: 'Costco',
      address: '1550 Mall of Georgia Blvd, Buford, GA 30519',
      locationId: 12345
    },
    dropoff: {
      address: '4054 Summit Chase, Gainesville, GA 30506',
      note: 'Please knock on the front door and leave on the porch.',
      locationId: 12346
    },
    date: new Date(),
    start_time: new Date(),
    end_time: new Date(new Date().setHours(new Date().getHours() + 2)),
    received_rating: {
      requester: 12345678910,
      rating: 4
    }
  }
];

export default errands;
