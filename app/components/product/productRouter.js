'use strict';

angular.module('product').config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : '/components/product/product-list.html',
		controller : 'ProductController'
	})
	
	.when('/prod', {
		templateUrl : '/components/product/product-list.html',
		controller : 'ProductController'
	})
	
	.when('/prod/:id', {
		templateUrl : '/components/product/a-product.html',
		controller : 'ProductDetailControl'
	});
} ]);
