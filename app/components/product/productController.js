'use strict';

angular.module('product').controller('ProductController',
		[ '$scope', 'Products', function($scope, Products) {
			$scope.editing = [];
			$scope.products = Products.query();
		} ]);
