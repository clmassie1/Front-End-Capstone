'use strict';

/*

    provide the basic interactions with google login/logut
 
*/

app.controller('controllerUser', function($scope, factoryUser, $window, $location) {
        console.log('controllerUser has loaded');


    $scope.logOut = function(){
        console.log('Logged You Out Son!!!!!',  factoryUser.logOut());
        factoryUser.logOut();
    };

$scope.loginGoogle = function(){
        factoryUser.authWithProvider()
            .then(result => {
                let user = result.user.uid;
                $location.path('/Home');
                $scope.$apply();
            })
            .catch(error => console.log("google login error", error.message, error.code));
    };

});
    