const mongoose = require('mongoose');

let { DB_URI } = process.env;
if (process.env.DB_USER && process.env.DB_PASSWORD) {
  const { DB_USER, DB_PASSWORD } = process.env;
  DB_URI = DB_URI.replace('mongodb://', `mongodb://${DB_USER}:${DB_PASSWORD}@`);
}

async function main() {
  try {
    await mongoose.connect(DB_URI || 'mongodb://localhost:27017/neighbr', { authSource: 'admin' });
    // await mongoose.connect('mongodb://mongodev.neighbr.site:51234/neighbr');
    // console.log(process.env)
    console.log('Mongoose connected to Neighbr!');
  } catch (err) {
    console.log(err);
  }
}
main();
