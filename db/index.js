const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/neighbr');
    console.log('Mongoose connected to Neighbr!');
  } catch (err) {
    console.log(err);
  }
}
main();
