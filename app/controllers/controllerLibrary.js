'use strict';

app.controller('controllerLibrary', function($scope, factoryLibrary, $location) {
        console.log('controllerLibrary has loaded');
// get all books from firebase, using the factory
// and bind the returned array to $scope 
         const pullBook = function(){
                factoryLibrary.getBook()
                .then(data => $scope.books = data);
        };
    
//called from partialLibrary.html gets the itemId from $routeParams
//and passes this to the factory, where an $http.delete removes is from the database
        $scope.deleteBook = function(id){
                factoryLibrary.deleteBook(id);
         };
        pullBook();
});