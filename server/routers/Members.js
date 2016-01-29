'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var MemberSchema = require('../models/MemberSchema.js');

/* GET /Members listing. */
router.get('/', function(req, res, next) {
	MemberSchema.find(function (err, members) {
    if (err) return next(err);
    res.json(members);
  });
});

/* POST /Members */
router.post('/', function(req, res, next) {
	MemberSchema.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* GET /Members/:id */
// router.get('/:id', function(req, res, next) {
// MemberSchema.findById(req.params.id, function (err, post) {
// if (err) return next(err);
// res.json(post);
// });
// });

/* GET /Members/:memberId */
router.get('/:memberId', function(req, res, next) {
	MemberSchema.findOne({MEMBER_ID: req.params.memberId}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Members/:id */
router.put('/:id', function(req, res, next) {
	MemberSchema.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Members/:id */
router.delete('/:id', function(req, res, next) {
	MemberSchema.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;