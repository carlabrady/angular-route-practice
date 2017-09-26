console.log('JS');

var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as ctrl'
    }).when('/tim', {
        templateUrl: 'views/tim.html',
        controller: 'TimController as ctrl'
    }).when('/daisy', {
        templateUrl: 'views/daisy.html',
        controller: 'DaisyController as ctrl'
    }).when('/tires', {
        templateUrl: 'views/brian.html',
        controller: 'BrianController as ctrl'
    }).otherwise({ redirectTo: '/'});
  });