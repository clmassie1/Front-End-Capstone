"use strict";

/*

    provide the basic interactions with fireBase last on list
 
*/




app.factory("factoryFriends", function($q, $http, $route){
    console.log('factoryFriends has loaded');


const getComment = function(input, id, book) {
  console.log('please god' );
  
    
        let newObj =  {
            comment: input,
            bookId: id,
            // commentId: book
            // name: .data.data.name
            
       };
return $q((resolve, reject) =>{
        angular.toJson(newObj);
        console.log('obj', newObj);
        //replace id with new var
          $http.post(`https://capstone-2cb7b.firebaseio.com/books/${id}/comments.json`, newObj)
            .then((data) =>{
                console.log('data to find comment id', data);
                
                

      

                let newObj = {
                    name: data.data.name,
                    // comment: data.config.data.comment,
                    // bookId: data.config.data.bookId,
                    // commentId: data.config.data.commentId
                 
                };

            // newObj = angular.toJson(newObj);
        console.log('commentId', newObj);

          $http.post(`https://capstone-2cb7b.firebaseio.com/books/${id}/${data.data.name}.json`, newObj);
          console.log('test', newObj);
              resolve();
            //  $route.reload(); 
            });
  });  
};




const delComment = function(bookId, key){
    return $q((resolve, reject) =>{
    $http.delete(`https://capstone-2cb7b.firebaseio.com/books/${bookId}/comments/${key}.json`)
    .then((data) =>{
                 resolve();
                //  $route.reload(); 
            });
              
        });
};



 const deleteBook = function(id){
         return $q((resolve, reject) =>{
            $http.delete(`https://capstone-2cb7b.firebaseio.com/books/${id}.json`)
            .then((data) =>{
                 resolve();
                //  $route.reload(); 
            });
              
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
      return {getBook, deleteBook, getComment, delComment};
});