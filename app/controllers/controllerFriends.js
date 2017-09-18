'use strict';

app.controller('controllerFriends', function($scope, factoryFriends, $location, factoryLibrary) {
        console.log('controllerFriends has loaded');


         $scope.comment = "";

    

        $scope.submitComment = function(input, book){
                console.log('book', book);
                book.comment = input;           
            console.log('input', input);
        //     console.log('test', $event.target);
            
             factoryLibrary.addComment(book.id, book);
                // .then();
    };

         $scope.deleteBook = function(id){
                factoryFriends.deleteBook(id);
         };

        const pullBook = function(){
                factoryFriends.getBook()
                .then(data => $scope.books = data);
       };
       pullBook();
    });
