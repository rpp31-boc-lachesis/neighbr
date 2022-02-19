const errands = [
  {
    _id: Math.floor(Math.random() * 1000000),
    category: 'Groceries',
    req_items: {
      item: 'someItem',
      quantity: 5,
      weight: '6lbs',
      size: 'Medium',
      notes: 'Please deliver to the back door',
      status: 'Active',
      requester: 12345678910,
      runner: 10987654321,
      transportation: 'Car'
    },
    message: {
      requester: 'You\'re the best!',
      notes: 'N/A'
    },
    pickup: {
      store: 'Costco',
      address: '1550 Mall of Georgia Blvd, Buford, GA 30519'
    },
    dropoff: {
      requester: 12345678910,
      address: '4054 Summit Chase, Gainesville, GA 30506'
    },
    date: Date.now(),
    start_time: Date.now(),
    end_time: Date.now() + 1000,
    received_rating: {
      requester: 12345678910,
      rating: 4
    }
  },
  {
    _id: Math.floor(Math.random() * 1000000),
    category: 'Groceries',
    req_items: {
      item: 'otherItem',
      quantity: 1,
      weight: '20lbs',
      size: 'Large',
      notes: 'Please deliver to the front door',
      status: 'Active',
      requester: 12345678910,
      runner: 10987654321,
      transportation: 'Car'
    },
    message: {
      requester: 'You\'re the best!',
      notes: 'N/A'
    },
    pickup: {
      store: 'Costco',
      address: '1550 Mall of Georgia Blvd, Buford, GA 30519'
    },
    dropoff: {
      requester: 12345678910,
      address: '5480 Apache Trail, Gainesville, GA 30506'
    },
    date: Date.now(),
    start_time: Date.now(),
    end_time: Date.now() + 1000,
    received_rating: {
      requester: 12345678910,
      rating: 4
    }
  },
  {
    _id: Math.floor(Math.random() * 1000000),
    category: 'Groceries',
    req_items: {
      item: 'anotherItem',
      quantity: 6,
      weight: '6lbs',
      size: 'Medium',
      notes: 'Please deliver to the side door',
      status: 'Active',
      requester: 12345678910,
      runner: 10987654321,
      transportation: 'Car'
    },
    message: {
      requester: 'You\'re the best!',
      notes: 'N/A'
    },
    pickup: {
      store: 'Costco',
      address: '1550 Mall of Georgia Blvd, Buford, GA 30519'
    },
    dropoff: {
      requester: 12345678910,
      address: '4077c Hidden Hollow Dr, Gainesville, GA 30506'
    },
    date: Date.now(),
    start_time: Date.now(),
    end_time: Date.now() + 1000,
    received_rating: {
      requester: 12345678910,
      rating: 4
    }
  }
];

export default errands;
