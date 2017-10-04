'use strict';

app.controller('controllerFriends', function($scope, factoryFriends, $location, factoryLibrary, factoryHome) {
        console.log('controllerFriends has loaded');



//                      $scope.submitBook = function(object){
//                          console.log('id', object);
                         
// factoryHome.addLibrary(object);   
// };

//         //  $scope.comment = "";

    

//         $scope.submitComment = function(input, book){
//                 console.log('book', book);
//                 book.comment = input;           
//             console.log('input', input);
//         //     console.log('test', $event.target);
            
//              factoryFriends.addComment(book.id, book);
//                 // .then();
//     };


       const pullBook = function(){
                factoryFriends.getBook()
                .then(data => $scope.books = data);
       };


     $scope.submitComment = function(input, id,  book){
        //        console.log('id', id);
               
                //      factoryLibrary.getComment(id);
                // book.comment = input;           
        //     console.log('input', input, id);
        //     console.log('test', $event.target);
              console.log('test', id);
             factoryFriends.getComment(input, id, book)
                .then(() => {                     
                     pullBook(id);
                });
           
             
                // .then();
    };

//     $scope.BookClub = function(object){
//                          console.log('id', object);
                         
// factoryHome.postBook(object);      
// };

//     $scope.BookComment = function(comment){
                  
                         
// factoryHome.postComment();    

//  }; 
 // console.log('function ran', submitBook);
 // console.log('data', $scope.books);

$scope.deleteComment = function(bookId, key) {
        factoryFriends.delComment(bookId, key)
         .then(() => {                     
                     pullBook();
                });
        console.log('test', bookId, key);
        
};

        const pullComment = function (id) {
           factoryFriends.getComment(id);
                console.log(factoryFriends.getComment(id));
           
 };






//     $scope.BookClub = function(object){
//                          console.log('id', object);
                         
// factoryHome.addLibrary(object);      
// };

         $scope.deleteBook = function(id){
             console.log('is workin');
             
                factoryFriends.deleteBook(id)
                  .then(() => {                     
                     pullBook();
                });
         };

 
       pullBook();
    });
