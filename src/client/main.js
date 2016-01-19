var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/addNew', {
      templateUrl: 'partials/addNew.html'
    })
    .otherwise({redirectTo: '/'});
}]);
