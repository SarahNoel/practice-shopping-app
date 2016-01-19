// add controllers
app.controller('addNewItemCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.addItem = {};

  $scope.getAllItems = function(){
    $http.get('/items')
    .then(function(data){
      console.log(data);
      $scope.allItems = data.data;
    });
  };

  $scope.createItem = function(){
    var newItem = $scope.addItem;
    $http.post('/item', newItem)
    .then(function(data){
      console.log(data);
      $scope.addItem = {};
      $scope.allItems = data.data;
    });
  };

  $scope.getAllItems();

}]);








