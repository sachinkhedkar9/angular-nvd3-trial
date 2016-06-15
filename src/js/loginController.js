
ChartingApp.controller('loginController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
  $scope.user = {};
  $scope.failed = false;
  var user = {
    username: 'sachin',
    password: 'sachin'
  };


  console.log('user : ', $scope.user);

  $scope.authenticateUser = function(){
    console.log("user received : ", $scope.user);
    if($scope.user.username === user.username && $scope.user.password === user.password){
     $location.path('/home');
   }else{
     $scope.authMessage = 'Authentication failed';
     $scope.failed = true;
   }
  }
}]);
