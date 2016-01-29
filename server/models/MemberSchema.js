'use strict';

var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
	MEMBER_ID : String,
	TAKEN : String,
	TAKEN_SORT : String,
	NAME : String,
	TEL : String,
	ADD : String,
	CART : String,
	CHECK_OUT : String,
	SHIPPED : String,
	VIEW_HISTORY : String,
	COUPONS : String
});

module.exports = mongoose.model('Member', MemberSchema);
