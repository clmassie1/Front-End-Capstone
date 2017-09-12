"use strict";

/*

    provide the basic interactions with api
 
*/

app.factory("factoryHome", function($q, $http){

//set buildBookObj equal to the 


    const buildBookObjs = function(data){

        let BookObjs = {
                id: data.data.items.kind
              };
              console.log('bookobj', BookObjs);

              return BookObjs;
              
    };

    console.log('factoryHome has loaded');
    const getBooks = function(bookArray){
        return $q((resolve, reject) =>{
            $http.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms:keyes`)
            .then((bookArray) => {
                resolve(buildBookObjs(bookArray));
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
    
    return { getBooks };
});
