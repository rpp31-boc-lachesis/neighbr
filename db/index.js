const mongoose = require('mongoose');

const { DB_URI } = process.env;

async function main() {
  try {
    await mongoose.connect(DB_URI || 'mongodb://localhost:27017/neighbr');
    console.log('Mongoose connected to Neighbr!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}
main();
