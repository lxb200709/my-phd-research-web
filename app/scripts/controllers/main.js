'use strict';

/**
 * @ngdoc function
 * @name myphdresearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myphdresearchApp
 */
angular.module('myphdresearchApp')
    .controller('MainCtrl', function ($state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $state.go('homePage')
    });

