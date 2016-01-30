'use strict';

angular.module('product').factory('Products', [ '$resource', function($resource) {
	return $resource('/products/:id', null, {
		'update' : {
			method : 'PUT'
		}
	});
} ]);
