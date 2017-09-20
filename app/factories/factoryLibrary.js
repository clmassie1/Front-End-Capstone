"use strict";
/*

    provide the basic interactions with fireBase
 
*/
app.factory("factoryLibrary", function($q, $http, $routeParams, $route){
    console.log('factoryLibrary has loaded');


const addComment = function(input, id) {
  
    
        let newObj =  {
            comment: input,
            bookId: id
       };

        angular.toJson(newObj);
        console.log('obj', newObj);
          $http.post(`https://capstone-2cb7b.firebaseio.com/comment.json`, newObj);
         
        };

        // const getComment = function(){
    //    console.log();
    //    return $http.get(`https://capstone-2cb7b.firebaseio.com/comment.json`)
    //         .then(book => (makeArray(book.data)));
            
      
    // };


    
 
 
// helper function to process the firebase object
// into an array with it's ugly id assigned as its local id
    const makeArray = function(Obj) {
        return Object.keys(Obj).map( key => {
            Obj[key].id = key;
            return Obj[key];
        });
    };
// call firebase for all the books
// firebase returns an object of objects,
// we pass that to makeArray, a helper defined above
   const getBook = function(user){
       console.log('user', user);
       return $http.get(`https://capstone-2cb7b.firebaseio.com/books.json?orderBy="uid"&equalTo="${user}"`)
            .then(book => (makeArray(book.data)));
            
      
    };


    const getComment = function(){

        let comment = [];

        console.log('comment', comment);
        

        return $http.get(`https://capstone-2cb7b.firebaseio.com/comment.json?orderBy="bookId"`)
             .then(book => (makeArray(book.data)));
            
 };
    
// called from partialLibrary.html gets the bookId from $routeParams
// and passes this to the factory, where an $http.delete removes it from the database
    const deleteBook = function(id){
            $http.delete(`https://capstone-2cb7b.firebaseio.com/books/${id}.json`)
            .then((data) =>{
                 $route.reload(); 
            });
              
        };
    
    return {getBook, deleteBook, addComment, getComment};
});
