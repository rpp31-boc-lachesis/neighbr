const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/neighbr');
    // eslint-disable-next-line no-console
    console.log('Mongoose connected to Neighbr!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}
main();
