'use strict';

angular.module('member').factory('Members', [ '$resource', function($resource) {
	return $resource('/members/:memberId', null, {
		'update' : {
			method : 'PUT'
		}
	});
} ]);
