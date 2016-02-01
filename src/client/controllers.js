// add controllers
app.controller('addNewItemCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.addItem = {};
  $scope.editItem = {};

  //get all items
  $scope.getAllItems = function(){
    $http.get('/items')
    .then(function(data){
      $scope.allItems = data.data;
    });
  };

  //create new item
  $scope.createItem = function(){
    var newItem = $scope.addItem;
    $http.post('/item', newItem)
    .then(function(data){
      $scope.addItem = {};
      $scope.allItems = data.data;
    });
  };

  //get item to edit
  $scope.getItem = function(id){
    $http.get('/item/'+id)
    .then(function(data){
      $scope.editItem = data.data;
      $scope.editingItem = true;
    });
  };

  //delete item
  $scope.deleteItem = function(id){
    $http.delete('/item/' + id)
    .then(function(data){
      $scope.editingItem = false;
      $scope.getAllItems();
    });  };

  //update item
  $scope.updateItem = function(id){
    $http.put('/item/' + id, $scope.editItem)
    .then(function(data){
      $scope.editingItem = false;
      $scope.getAllItems();
    });
  };

  //get all items on page load
  $scope.getAllItems();




}]);








