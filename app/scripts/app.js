'use strict';

/**
 * @ngdoc overview
 * @name myphdresearchApp
 * @description
 * # myphdresearchApp
 *
 * Main module of the application.
 */
angular
  .module('myphdresearchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'd3Module'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/xiangbo.li/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/xiangbo.li/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectCtrl',
        controllerAs: 'projects'
      })
      .when('/xiangbo.li/publications', {
        templateUrl: 'views/publications.html',
        controller: 'PublicationCtrl',
        controllerAs: 'publications'
      })
      .when('/xiangbo.li/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourceCtrl',
        controllerAs: 'resources'
      })
      .when('/xiangbo.li/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/xiangbo.li/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl',
        controllerAs: 'cv'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
