const mongoose = require('mongoose');

const { DB_URI } = process.env;

async function main() {
  try {
<<<<<<< HEAD
    await mongoose.connect('mongodb://localhost:27017/neighbr');
    // eslint-disable-next-line no-console
=======
    await mongoose.connect(DB_URI || 'mongodb://localhost:27017/neighbr');
>>>>>>> master
    console.log('Mongoose connected to Neighbr!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}
main();
