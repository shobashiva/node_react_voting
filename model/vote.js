'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new Schema({
	skater_id: String,
	date: { type: Date, default: Date.now },
	user_id: String
})

module.exports = mongoose.model('Vote', VoteSchema);