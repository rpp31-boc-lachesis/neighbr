const mongoose = require('mongoose');
const errandSchema = require('./errands.js');
const locationSchema = require('./locations.js');
const runSchema = require('./runs.js');
const userSchema = require('./users.js');

module.exports.Errand = mongoose.model('Errand', errandSchema);
module.exports.Location = mongoose.model('Location', locationSchema);
module.exports.Run = mongoose.model('Run', runSchema);
module.exports.Users = mongoose.model('User', userSchema);
