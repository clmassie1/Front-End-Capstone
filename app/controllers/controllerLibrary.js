'use strict';

app.controller('controllerLibrary', function($scope, factoryLibrary, $location, factoryUser, $routeParams, factoryHome) {
        console.log('controllerLibrary has loaded');

//     $scope.comment = "";

    

        $scope.submitComment = function(input, id){
        //        console.log('id', id);
               
                //      factoryLibrary.getComment(id);
                // book.comment = input;           
        //     console.log('input', input, id);
        //     console.log('test', $event.target);
            
             factoryLibrary.addComment(input, id);
                // .then();
    };

    $scope.BookClub = function(object){
                         console.log('id', object);
                         
factoryHome.postBook(object);      
};

//     $scope.BookComment = function(comment){
                  
                         
// factoryHome.postComment();    

//  }; 
 // console.log('function ran', submitBook);
 // console.log('data', $scope.books);
        const pullComment = function (id) {
           factoryLibrary.getComment(id);
                console.log(factoryLibrary.getComment(id));
           
 };

// get all books from firebase, using the factory
// and bind the returned array to $scope 
         const pullBook = function(id){
                let user = factoryUser.getCurrentUser();
                console.log('user', user);
                factoryLibrary.getBook(user)
                .then(data => $scope.books = data);
               console.log('test',  factoryLibrary.getComment());
               
        };
//     
//called from partialLibrary.html gets the itemId from $routeParams
//and passes this to the factory, where an $http.delete removes is from the database
        $scope.deleteBook = function(id){
                factoryLibrary.deleteBook(id);
        };


     
        pullBook();
});