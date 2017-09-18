"use strict";

/*

    provide the basic interactions with fireBase last on list
 
*/

app.factory("factoryFriends", function($q, $http, $route){
    console.log('factoryFriends has loaded');


 const deleteBook = function(id){
            $http.delete(`https://capstone-2cb7b.firebaseio.com/books/${id}.json`)
            .then((data) =>{
                 $route.reload(); 
            });
              
        };


const makeArray = function(Obj) {
        return Object.keys(Obj).map( key => {
            Obj[key].id = key;
            return Obj[key];
        });
    };


    const getBook = function(id){
        return $http.get(`https://capstone-2cb7b.firebaseio.com/books.json`)
            .then(book => (makeArray(book.data)));
            
      

    };
      return {getBook, deleteBook};
});