const testData = [
  {
    destination: 'Disneyland',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date().setHours(new Date().getHours() + 2),
    transportation: 'Bus',
    items: [],
  },
  {
    destination: 'Costco',
    date: new Date(),
    startTime: new Date().toTimeString(),
    endTime: new Date(new Date().setHours(new Date().getHours() + 2)).toTimeString(),
    transportation: 'SUV',
    items: [],
  },
  {
    destination: 'The Walmart',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date().setHours(new Date().getHours() + 2),
    transportation: 'Pickup Truck',
    items: [],
  },
  {
    destination: 'Stuff N\' Things',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date().setHours(new Date().getHours() + 2),
    transportation: 'Walking',
    items: [],
  },
];
export default testData;
