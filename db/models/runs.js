const mongoose = require('mongoose');

const runSchema = new mongoose.Schema({

});

const Run = mongoose.model('Run', runSchema);

module.exports = Run;
