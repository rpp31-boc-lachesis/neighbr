const testData = [
  {
    id: btoa('testDataOne'),
    destination: 'Disneyland',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
    transportation: 'Bus',
    items: [],
  },
  {
    id: btoa('testDataTwo'),
    destination: 'Costco',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
    transportation: 'SUV',
    items: [],
  },
  {
    id: btoa('testDataThree'),
    destination: 'The Walmart',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
    transportation: 'Pickup Truck',
    items: [],
  },
  {
    id: btoa('testDataFour'),
    destination: 'Stuff N\' Things',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
    transportation: 'Walking',
    items: [],
  },
];
export default testData;
