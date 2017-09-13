"use strict";

/*

    provide the basic interactions with api
 
*/

app.factory("factoryHome", function($q, $http, FBCreds){

//set buildBookObj equal to the 


let Url = FBCreds.databaseURL;

    const buildBookObjs = function(data){

        let BookObjs =  data.map(function(currentBook){
            // console.log('currentt book', currentBook);
            let book =  {
                id: currentBook.id,
                authors: currentBook.volumeInfo.authors,
                image: currentBook.volumeInfo.imageLinks.thumbnail,
                title: currentBook.volumeInfo.title,
                description: currentBook.volumeInfo.description
            };
            return book;
        });
            console.log('BookObjs', BookObjs);
            

              return BookObjs;
              
    };

    console.log('factoryHome has loaded');
    const getBooks = function(bookArray){
        return $q((resolve, reject) =>{
            $http.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms:gatsby`)
            .then((bookArray) => {
                resolve(buildBookObjs(bookArray.data.items));
            })
            .catch((error) => {
                reject(error);
            });
        });
    };



const addBook = function(obj){
    console.log('obj', obj);
    
        let newObj =  {
          key: obj,  
          title: obj.title,
          authors: obj.authors,
          image: obj.image,
          id: obj.id,
          description: obj.description
        };
          

        JSON.stringify(newObj);
        console.log('object', newObj);
        return $http.post(`https://capstone-2cb7b.firebaseio.com/books.json`, newObj)
            .then(data => data)
            .catch();
    };

    
    return { getBooks, addBook};
});
