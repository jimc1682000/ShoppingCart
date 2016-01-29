'use strict';

angular.module('member')
  .controller('MemberController', ['$scope', 'Members', function ($scope, Members) {
    $scope.members = Members.query();
  }]);
