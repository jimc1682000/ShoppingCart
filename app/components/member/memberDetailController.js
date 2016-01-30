'use strict';

angular.module('member').controller(
		'MemberDetailControl',
		[ '$scope', '$routeParams', 'Members', '$location',
				function($scope, $routeParams, Members, $location) {
					$scope.member = Members.get({
						id : $routeParams.id
					});
				} ]);
