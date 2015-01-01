'use strict';

/**
 * @ngdoc function
 * @name yeoman2015App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeoman2015App
 */
angular.module('yeoman2015App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
