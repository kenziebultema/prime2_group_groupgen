var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){

    $scope.select = function(number){
        console.log('clicked', number);
    }

    $scope.shuffle = function(){
        console.log('shuffled');
    }
}]);
