const axios = require('axios');

const userIds = [
  '620d3174fcabcc778c98c580',
  '620d3174fcabcc778c98c581',
  '620d3174fcabcc778c98c582',
  '620d3174fcabcc778c98c583',
  '620d3174fcabcc778c98c584',
  '620d3174fcabcc778c98c585',
  '620d3174fcabcc778c98c586',
  '620d3174fcabcc778c98c587',
  '620d3174fcabcc778c98c588',
  '620d3174fcabcc778c98c589',
  '620d3174fcabcc778c98c58a',
  '620d3174fcabcc778c98c58b',
  '620d3174fcabcc778c98c58c',
  '620d3174fcabcc778c98c58d',
  '620d3174fcabcc778c98c58e',
  '620d3174fcabcc778c98c58f',
  '620d3174fcabcc778c98c590',
  '620d3174fcabcc778c98c591',
  '620d3174fcabcc778c98c592',
  '620d3174fcabcc778c98c593'
];

const items = JSON.parse(`[{
  "item": "Beer - Fruli"
}, {
  "item": "Pepper - Yellow Bell"
}, {
  "item": "Tandoori Curry Paste"
}, {
  "item": "Mousse - Mango"
}, {
  "item": "Sun - Dried Tomatoes"
}, {
  "item": "Wild Boar - Tenderloin"
}, {
  "item": "Clam - Cherrystone"
}, {
  "item": "Pie Filling - Cherry"
}, {
  "item": "Carbonated Water - Strawberry"
}, {
  "item": "Beef Dry Aged Tenderloin Aaa"
}, {
  "item": "Bar Mix - Pina Colada, 355 Ml"
}, {
  "item": "Vanilla Beans"
}, {
  "item": "Sauce - Black Current, Dry Mix"
}, {
  "item": "Beer - Guiness"
}, {
  "item": "Pepper - Black, Ground"
}, {
  "item": "Star Anise, Whole"
}, {
  "item": "Beans - Black Bean, Canned"
}, {
  "item": "Bar - Granola Trail Mix Fruit Nut"
}, {
  "item": "Pepper - Roasted Red"
}, {
  "item": "Sugar - White Packet"
}]`);

const locations = [
  '6215b1edc9e1388f59d55461',
  '6215b4a4197cf88d2bec9503',
  '6215b4b9197cf88d2bec950a',
  '6215b509197cf88d2bec9517',
  '6215b536197cf88d2bec9524',
  '6215b545197cf88d2bec952b',
  '6216936ce9e6d066e501a1cf',
  '62169385e9e6d066e501a1d6',
  '6216939ce9e6d066e501a1dd',
]

const getRandomIndex = (n) => Math.floor(Math.random() * n);

const makeErrands = function(num) {
  for (let i = 0; i < num; i++) {
    const errand = {
      requester: userIds[getRandomIndex(userIds.length)],
      req_items: [
        {
          item: items[getRandomIndex(items.length)].item,
          quantity: getRandomIndex(20),
          status: 'In-Progress'
        },
      ],
      weight: `${getRandomIndex(80)} lbs`,
      size: ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'][getRandomIndex(6)],
      message: '',
      pickup: {
        locationId: locations[getRandomIndex(locations.length)],
      },
      date: new Date(),
      start_time: new Date(),
      end_time: new Date(),
    };

    axios.get('https://baconipsum.com/api', {
      params: {
        type: 'meat-and-filler',
        sentences: getRandomIndex(20) + 3,
      }
    })
      .then((response) => {
        // console.log(response.data[0]);
        errand.message = response.data[0];
      })
      .then(() => {
        axios.post('http://localhost:3000/errands/create', errand)
          .then((response) => {
            console.log(response.data);
            console.log(response.statusText, response.status);

          })
          .catch((err) => { console.log(err) });
      });
  }
};

makeErrands(1);
