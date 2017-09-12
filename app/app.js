"use strict";
console.log('app.js has loaded');
const app = angular.module("capstone", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.
    when('/Home', {
      templateUrl: '/partials/partialHome.html',
      controller: 'controllerHome'
      
    }).
    otherwise('/');
    
});

app.config(function($routeProvider){
    $routeProvider.
    when('/library', {
      templateUrl: '/partials/partialLibrary.html',
      controller: 'controllerLibrary'
      
    }).
    otherwise('/');
    
});

app.config(function($routeProvider){
    $routeProvider.
    when('/Friends', {
      templateUrl: '/partials/partialFriends.html',
      controller: 'controllerFriends'
      
    }).
    otherwise('/');
    
});
