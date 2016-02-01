'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var mongodb = require('mongodb');
var assert = require('assert');
var app = express();
// console.log(process.env.IP + process.env.PORT);
var members = require('./server/routers/Members.js');
var products = require('./server/routers/Products.js');

var mongoose = require('mongoose');
var databaseUri = 'mongodb://45.56.87.70:27017/ShoppingCart';
mongoose.connect(databaseUri, function(err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});

app.use(function(req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log('Client IP: ', ip);
	next();
});
app.use('/members', members);
app.use('/products', products);
app.use(serveStatic('app', {
	'index' : [ 'index.html', 'index.htm' ]
}));
app.use(serveStatic('res'));
app.listen(3000);
//如果使用Cloud9，設定為process.env.PORT
// app.listen(process.env.PORT);

module.exports = app;