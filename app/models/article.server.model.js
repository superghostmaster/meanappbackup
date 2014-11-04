'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true,
    required: 'Content can not be blank. Be more creative.'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
  
  keywords: {
    type: String,
    default:'',
    required: 'Select your keywords to continue.'
  },
  
  keywordstwo: {
    type: String,
    default:'',
    
  },
  
  keywordsthree: {
    type: String,
    default:'',
    
  }
  
});


mongoose.model('Article', ArticleSchema);