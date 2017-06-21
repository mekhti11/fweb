var app = angular.module('todoApp',[]);

app.controller("mycontrol",function($scope , $http) {
  $scope.todo ={
    user : "Mekhti"
  };
  var promise = $http.get("json/todo.json");
  promise.then(function(response){
    $scope.todo.items = response.data ;
  });

  /**$scope.todo = {
    user : "Mekhti",
    items :[
      {action : "Wake up" , done : true},
      {action : "Get Dressed" , done : true},
      {action : "Go toilet" , done : true},
      {action : "Have shower" , done : true},
      {action : "Have Breakfast", done:false}
    ]
  };*/

  $scope.inCompletedCount = function (){
    var count =0;
    angular.forEach($scope.todo.items , function(item){
      if(!item.done)
        {count++}
    });
    return count;
  }

  $scope.addButtonHandler = function(newItem){
    if(newItem != null)
      $scope.todo.items.push({
        action : newItem , done : false
      });
  }

  $scope.warningLevel = function () {
    if ($scope.inCompletedCount() <3)
      return "label-success";
    else
      return "label-warning";
  }
});

app.filter("checkedItems", function () {
  return function (items, showComplete) {
    var resultArr = [];
    angular.forEach(items, function (item) {
      if (item.done == false || showComplete == true) {
        resultArr.push(item);
      }
    });
    return resultArr;
  }
});
