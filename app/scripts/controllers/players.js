/**
 * Created by lxb200709 on 2/22/17.
 */
'use strict';

angular.module('myphdresearchApp')
  .controller('PlayersCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.loadVideoJSHLS = function(){
      console.log("here we go")
      $location.path('/views/cv.html')
    }

    /* $scope.redirectToDraftPage = function() {
      console.log("hello")
      var host = $window.location.host;
      var landingUrl = "http://www.google.com";
      alert(landingUrl);
      $window.location.href = landingUrl;
    }; */
      
  });
