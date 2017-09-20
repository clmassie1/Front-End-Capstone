'use strict';

app.controller('controllerFriends', function($scope, factoryFriends, $location, factoryLibrary, factoryHome) {
        console.log('controllerFriends has loaded');



                     $scope.submitBook = function(object){
                         console.log('id', object);
                         
factoryHome.addLibrary(object);   
};

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
                         
factoryHome.addLibrary(object);      
};

         $scope.deleteBook = function(id){
             console.log('is workin');
             
                factoryFriends.deleteBook(id);
         };

        const pullBook = function(){
                factoryFriends.getBook()
                .then(data => $scope.books = data);
       };
       pullBook();
    });
