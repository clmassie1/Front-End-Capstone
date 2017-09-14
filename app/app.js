"use strict";
console.log('app.js has loaded');
const app = angular.module("capstone", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: '/partials/partialUser.html',
      controller: 'controllerUser'
      }). 
     when('/Home', {
      templateUrl: '/partials/partialHome.html',
      controller: 'controllerHome'
      }). 
    when('/Books', {
      templateUrl: '/partials/partialBooks.html',
      controller: 'controllerBooks'
    }). 
   when('/library', {
      templateUrl: '/partials/partialLibrary.html',
      controller: 'controllerLibrary'
      
    }).when('/Friends', {
      templateUrl: '/partials/partialFriends.html',
      controller: 'controllerFriends'
      
    })
      .otherwise('/');
    
});

