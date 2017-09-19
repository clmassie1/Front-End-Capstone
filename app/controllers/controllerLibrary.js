'use strict';

app.controller('controllerLibrary', function($scope, factoryLibrary, $location, factoryUser, $routeParams, factoryHome) {
        console.log('controllerLibrary has loaded');

    $scope.comment = "";

    

        $scope.submitComment = function(input, book){
                console.log('book', book);
                book.comment = input;           
            console.log('input', input);
        //     console.log('test', $event.target);
            
             factoryLibrary.addComment(book.id, book);
                // .then();
    };

    $scope.BookClub = function(object){
                         console.log('id', object);
                         
factoryHome.postBook(object);      
};

    $scope.BookComment = function(object){
                         console.log('id', object);
                         
factoryHome.postComment(object);    

 }; 
 // console.log('function ran', submitBook);
 // console.log('data', $scope.books);




// get all books from firebase, using the factory
// and bind the returned array to $scope 
         const pullBook = function(){
                let user = factoryUser.getCurrentUser();
                console.log('user', user);
                factoryLibrary.getBook(user)
                .then(data => $scope.books = data);
        };
//     
//called from partialLibrary.html gets the itemId from $routeParams
//and passes this to the factory, where an $http.delete removes is from the database
        $scope.deleteBook = function(id){
                factoryLibrary.deleteBook(id);
         };
        pullBook();
});