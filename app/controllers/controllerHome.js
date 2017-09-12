'use strict';

app.controller('controllerHome', function($scope, factoryHome, $location) {
        console.log('controllerHome has loaded');
        

        factoryHome.getBooks()
            .then(book => console.log("book in ctrl", book));
         
           
    });