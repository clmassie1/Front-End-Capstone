"use strict";

/*

    provide the basic interactions with fireBase
 
*/

app.factory("factoryLibrary", function($q, $http){
    console.log('factoryLibrary has loaded');
    return {
        search: ""
    };
});