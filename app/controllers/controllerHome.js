'use strict';

app.controller('controllerHome', function($scope, factoryHome, $location) {
        console.log('controllerHome has loaded');


   
                     $scope.submitBook = function(object){
                         console.log('id', object);
                         
factoryHome.addBook(object);        
 // console.log('function ran', submitBook);
 // console.log('data', $scope.books);
};

$scope.searchTerm = "";

$scope.searchBook = function(){
    console.log('search book', $scope.searchTerm);
    factoryHome.getBooks($scope.searchTerm)
    .then((resultes) => {
        $scope.display(resultes);
    
 });
};



$scope.display = (results)=>{
    console.log('results', results);
    $scope.books = results;
};




//         let getAllBooks = function(){
//             factoryHome.getBooks()
//  .then((resultes) => {
//      $scope.books = resultes;
//       console.log('books', $scope.books);
//  });
//         };
// getAllBooks();


});

