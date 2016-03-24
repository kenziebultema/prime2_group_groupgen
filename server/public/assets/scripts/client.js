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
      $scope.numGroups = number;

      $http.get('/assets/data/students.json').then(function(response){
          $scope.groupArray = [];
          //$scope.numGroups = number;
          $scope.students = response.data.students;
          var studentNumArray = $scope.students.length;
          $scope.shuffle($scope.students);
          //angular.forEach($scope.students, function(value, key) {
          //var newObj = {};
          //newObj.name = value.name;
          //newObj.team = number;
        //});

          for(var i = 0; i<$scope.numGroups; i++){
            $scope.groupArray.push([]);
          }

          for(var j = $scope.students.length -1; j>0; j--){
            var targetNum = j % $scope.numGroups;
            var person = $scope.students.pop();
            $scope.groupArray[targetNum].push(person);
          }

          console.log("Group  Array: ", $scope.groupArray);
          //console.log(newObj);
          for(var i = 0; i < $scope.groupArray.length; i ++){
              $scope.studentArray = $scope.groupArray[i];
            //   console.log('array of arrays', $scope.studentArray);
          }
          //$scope.shuffle($scope.students);
        //   console.log($scope.students);
      });
  }
}]);

console.log('connected');
