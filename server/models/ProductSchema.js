'use strict';

var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	PRODUCT_ID : String,
	MEMBER_ID : String,
	KIND : String,
	NAME : String,
	COST : String,
	PRICE : String,
	SOLD : String,
	STOCK : String,
	RESERVE : String,
	DETAIL : String,
	IMAGE_URL : String,
	PRODUCT_COLOR : String,
	PRODUCT_STYLE : String
});

module.exports = mongoose.model('Product', ProductSchema);
