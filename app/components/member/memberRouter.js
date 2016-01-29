'use strict';

angular.module('member')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/components/member/member-list.html',
        controller: 'MemberController'
      });
  }]);
