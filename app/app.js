"use strict";
console.log('app.js has loaded');
const app = angular.module("capstone", ["ngRoute"]);

const isAuth = (factoryUser) => factoryUser.isAuthenticated();

app.config(function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: '/partials/partialUser.html',
      controller: 'controllerUser',
       
      }). 
     when('/Home', {
      templateUrl: '/partials/partialHome.html',
      controller: 'controllerHome',
      resolve: {isAuth}
      }). 
    when('/Books', {
      templateUrl: '/partials/partialBooks.html',
      controller: 'controllerBooks',
      resolve: {isAuth}
    }). 
   when('/library', {
      templateUrl: '/partials/partialLibrary.html',
      controller: 'controllerLibrary',
      resolve: {isAuth}
     
      
    }).when('/Friends', {
      templateUrl: '/partials/partialFriends.html',
      controller: 'controllerFriends',
      resolve: {isAuth}
    
      
    })
      .otherwise('/');
    
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
    firebase.initializeApp(authConfig);
});

