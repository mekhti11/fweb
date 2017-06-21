var application = angular.module('languageApp',[]);

application.controller("mycontrol",function($scope) {
  $scope.todo = {
    user : "Mekhti",
    items :[
      {action : "Wake up" , done : true},
      {action : "Get Dressed" , done : true},
      {action : "Go toilet" , done : true},
      {action : "Have shower" , done : true},
      {action : "Have Breakfast", done:false}
    ]
  };
});

application.controller('languages',function ($scope) {
    $scope.myFavLan = 'none';

    $scope.showName = function () {
      $scope.durum = true;
    }

    $scope.myFavLans = [{name :'Java' , extension :'.java'}, {name: 'JavaScript' , extension :'.js'},{name : 'C',extension:'.c'}];
    $scope.java = function () {
        $scope.myFavLan = "Java";
    };
    $scope.js = function () {
        $scope.myFavLan = "JS";
    };
    $scope.c = function () {
        $scope.myFavLan = "C";
    };
    var updateClock = function() {
        $scope.clock = new Date();
    };
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});
