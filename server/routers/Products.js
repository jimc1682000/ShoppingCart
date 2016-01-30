'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var ProductSchema = require('../models/ProductSchema.js');

/* GET /Products listing. */
router.get('/', function(req, res, next) {
	ProductSchema.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* POST /Products */
router.post('/', function(req, res, next) {
	ProductSchema.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

 /* GET /Products/:id */
 router.get('/:id', function(req, res, next) {
	 ProductSchema.findById(req.params.id, function (err, post) {
	 if (err) return next(err);
	 res.json(post);
	 });
 });

/* GET /Products/:productId */
// router.get('/:productId', function(req, res, next) {
// ProductSchema.findOne({PRODUCT_ID: req.params.productId}, function (err,
// post)
// {
// if (err) return next(err);
// res.json(post);
// });
// });

/* PUT /Products/:id */
router.put('/:id', function(req, res, next) {
	ProductSchema.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Products/:id */
router.delete('/:id', function(req, res, next) {
	ProductSchema.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;