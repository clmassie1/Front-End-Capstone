"use strict";
/*

    provide the basic interactions with fireBase
 
*/
app.factory("factoryLibrary", function($q, $http, $routeParams){
    console.log('factoryLibrary has loaded');
 
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
   const getBook = function(book){
        return $http.get(`https://capstone-2cb7b.firebaseio.com/books.json`, book)
            .then(book => (makeArray(book.data)));
            
      
    };
// called from list.html gets the bookId from $routeParams
// and passes this to the factory, where an $http.delete removes it from the database
    const deleteBook = function(id){
            $http.delete(`https://capstone-2cb7b.firebaseio.com/books.json`, id)
                .then();
    };
    
    return {getBook, deleteBook};
});
