var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookSchema = new Schema({
	'title' : String,
	'summary' : String,
	'isbn' : String,
	'author' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'author'
	},
	'genre' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'genre'
	}
});

module.exports = mongoose.model('book', bookSchema);
