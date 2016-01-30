'use strict';

angular.module('member')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/memberList', {
        templateUrl: '/components/member/member-list.html',
        controller: 'MemberController'
      })
      .when('/member/:id', {
        templateUrl: '/components/member/member-list.html',
        controller: 'MemberDetailController'
      });
  }]);
