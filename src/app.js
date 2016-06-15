var ChartingApp = angular.module("ChartingApp",['ngRoute']);

ChartingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/login/",{
    controller: 'loginController',
    templateUrl: 'views/login.html',
  }).
  when("/home/",{
    controller: 'homeController',
    templateUrl: 'views/home.html',
  }).
  otherwise({
    redirectTo: '/login/'
  })
}]);

ChartingApp.controller('masterController', ['$scope', '$rootScope', function($scope, $rootScope){

}]);
