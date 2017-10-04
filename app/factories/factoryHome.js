"use strict";

/*

    provide the basic interactions with api
 
*/
app.factory("factoryHome", function($q, $http, FBCreds, factoryUser){


let Url = FBCreds.databaseURL;

  const user = factoryUser.getCurrentUser();


    const buildBookObjs = function(data){

        let BookObjs =  data.map(function(currentBook){
            console.log('currentt book', currentBook);
            
            let book =  {
                id: currentBook.id,
                authors: currentBook.volumeInfo.authors,
                image: currentBook.volumeInfo.imageLinks.thumbnail,
                title: currentBook.volumeInfo.title,
                description: currentBook.volumeInfo.description,
                link: currentBook.volumeInfo.canonicalVolumeLink
            };
            return book;
        });
            console.log('BookObjs', BookObjs);
            

              return BookObjs;
              
    };


let searchR = [];
    // let search = "";
    
    
// call api for all the books
    console.log('factoryHome has loaded');
    const getBooks = function(search){
        console.log('searchg', search);
        
        return $q((resolve, reject) =>{
            $http.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms:${search}`)
            .then((bookArray) => {
                searchR = buildBookObjs(bookArray.data.items);
                console.log('buildBookObjs', buildBookObjs(bookArray.data.items));
                  resolve(searchR);
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
          description: obj.description,
          uid: user,
        };
          

        JSON.stringify(newObj);
        console.log('object', newObj);
        return $http.post(`https://capstone-2cb7b.firebaseio.com/books/.json`, newObj)
            .then((data) =>{
                console.log('data', data);
      

                let newObj = {
                    name: data.data.name,
                 
                };

            newObj = angular.toJson(newObj);
        console.log('commentId', newObj);
          $http.patch(`https://capstone-2cb7b.firebaseio.com/books/${data.data.name}.json`, newObj);

            });
};


const addLibrary = function(obj){
    console.log('obj', obj);
    
        let newObj =  {
          key: obj,  
          title: obj.title,
          authors: obj.authors,
          image: obj.image,
          id: obj.id,
          description: obj.description,
          uid: user
          
        };
          

        JSON.stringify(newObj);
        console.log('object', newObj);
        return $http.post(`https://capstone-2cb7b.firebaseio.com/library/.json`, newObj)
            .then((data) =>{
                console.log('data', data);
      

                let newObj = {
                    name: data.data.name,
                 
                };

            newObj = angular.toJson(newObj);
        console.log('commentId', newObj);
          $http.patch(`https://capstone-2cb7b.firebaseio.com/library/${data.data.name}.json`, newObj);

            });
};


const postBook = function(obj){
    console.log('obj', obj);
    
        let newObj =  {
          key: obj,  
          title: obj.title,
          authors: obj.authors,
          image: obj.image,
          id: obj.id,
          description: obj.description,
          uid: user
        };
          

        JSON.stringify(newObj);
        console.log('object', newObj);
        return $http.post(`https://capstone-2cb7b.firebaseio.com/books/.json`, newObj)
            .then(data => data)
            .catch();
    };


    
    
    return { getBooks, addBook, buildBookObjs, postBook, addLibrary};
});
