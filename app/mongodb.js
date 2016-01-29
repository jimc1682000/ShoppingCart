'use strict';

var collectionName = 'Member';
var assert = require('assert');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
//var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://45.56.87.70:27017/ShoppingCart';
//Member, Merchandise, Purchase_Record, Evaluation_Form
var memberNameValue = "test_7";
var test = {
	"NAME" : memberNameValue
};


var findMembers = function(db, callback) {
	var cursor = db.collection(collectionName).find();
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if (doc != null) {
			console.dir(doc);
		} else {
			callback();
		}
	});
};

// kv = key-value
var findAMemberByName = function(db, kv, callback) {
	var cursor = db.collection(collectionName).find(kv);
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if (doc != null) {
			console.dir(doc);
		} else {
			callback();
		}
	});
};

var insertDocument = function(db, callback) {
	db.collection('restaurants').insertOne({
		"address" : {
			"street" : "2 Avenue",
			"zipcode" : "10075",
			"building" : "1480",
			"coord" : [ -73.9557413, 40.7720266 ]
		},
		"borough" : "Manhattan",
		"cuisine" : "Italian",
		"grades" : [ {
			"date" : new Date("2014-10-01T00:00:00Z"),
			"grade" : "A",
			"score" : 11
		}, {
			"date" : new Date("2014-01-16T00:00:00Z"),
			"grade" : "B",
			"score" : 17
		} ],
		"name" : "Vella",
		"restaurant_id" : "41704620"
	}, function(err, result) {
		assert.equal(err, null);
		console.log("Inserted a document into the restaurants collection.");
		callback(result);
	});
};

var updateRestaurants = function(db, callback) {
	db.collection('restaurants').updateOne({
		"name" : "Juni"
	}, {
		$set : {
			"cuisine" : "American (New)"
		},
		$currentDate : {
			"lastModified" : true
		}
	}, function(err, results) {
		console.log(results);
		callback();
	});
};

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
//	findAMemberByName(db, test, function() {
//		db.close();
//	});
	 findMembers(db, function() {
		db.close();
	});
	// insertDocument(db, function() {
	// db.close();
	// });
	// updateRestaurants(db, function() {
	// db.close();
	// });
});
