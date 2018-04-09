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
    'd3Module',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('homePage', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('playersPage', {
        url: '/xli/players',
        templateUrl: '/views/players.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })

      /* players */
      .state('videojshls', {
        url: '/xli/players/videojs-hls',
        templateUrl: '/views/players/videojs-contrib-hls.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })
      .state('vidoejsdash', {
        url: '/xli/players/videojs-dash',
        templateUrl: '/views/players/videojs-contrib-dash.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })
      .state('shakaplayer', {
        url: '/xli/players/shaka-player',
        templateUrl: '/views/players/shaka-player.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })
      .state('dashjs', {
        url: '/xli/players/dashjs',
        templateUrl: '/views/players/dashjs.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })
      .state('bcplayer', {
        url: '/xli/players/bc-player',
        templateUrl: '/views/players/bc-player.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })
      .state('bcplayerhls', {
        url: '/xli/players/bc-player-hls',
        templateUrl: '/views/players/bc-player-hls.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players' 
      })
      /* End players */
      
      .state('publicationsPage', {
        url: '/xli/publications',
        templateUrl: '/views/publications.html',
        controller: 'PublicationCtrl',
        controllerAs: 'publications'
      })
      .state('resourcesPage', {
        url: '/xli/resources',
        templateUrl: '/views/resources.html',
        controller: 'ResourceCtrl',
        controllerAs: 'resources'
      })
      .state('blogPage', {
        url: '/xli/blog',
        templateUrl: '/views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .state('cvPage', {
        url: '/xli/cv',
        templateUrl: '/views/cv.html',
        controller: 'CvCtrl',
        controllerAs: 'cv'
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
