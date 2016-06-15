var ChartingApp = angular.module("AgriBusinessApp",['ngRoute']);

ChartingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/home/",{
    templateUrl: 'views/home.html',
  }).
  when("/about/",{
    templateUrl: 'views/about.html',
  }).
  otherwise({
    redirectTo: '/home/'
  })
}]);

ChartingApp.controller('masterController', ['$scope', '$rootScope', function($scope, $rootScope){

}]);
