"use strict";
/*

    provide the basic interactions with fireBase
 
*/
app.factory("factoryUser", function($q, $http, $routeParams, FBCreds){
    console.log('factoryUser has loaded');

    let currentUser = null;

    const provider = new firebase.auth.GoogleAuthProvider();

    const isAuthenticated = function (){
        return new Promise ((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user){
                    currentUser = user.uid;
                    resolve(true);
                }else {
                    reject(false);
                }
            });
        });
    };

    const getCurrentUser = function(){
        return currentUser;
    };
     const logOut = function(){
        return firebase.auth().signOut();
    };
    const authWithProvider = function(){
        return firebase.auth().signInWithPopup(provider);
    };

    return {

        getCurrentUser,
        logOut,
        isAuthenticated,
        authWithProvider     
    };

});
