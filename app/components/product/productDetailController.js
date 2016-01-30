'use strict';

angular.module('product').controller(
		'ProductDetailControl',
		[ '$scope', '$routeParams', 'Products', '$location',
				function($scope, $routeParams, Products, $location) {
					$scope.product = Products.get({
						id : $routeParams.id
					});
				} ]);
