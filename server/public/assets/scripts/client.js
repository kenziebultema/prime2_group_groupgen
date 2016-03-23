var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){

    $scope.shuffle = function(array){
        console.log('shuffled');
        for (var i = array.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
           array[i] = array[j];
           array[j] = temp;
        }
           return array;
    }

    $scope.select = function(number){
        console.log('clicked', number);

        $http.get('/assets/data/students.json').then(function(response){
            $scope.students = response.data.students;
            $scope.shuffle($scope.students);
        });
    }

}]);

console.log('connected');
