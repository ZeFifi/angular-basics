angular.module("todoListApp", [])
.controller("mainCtrl", function($scope) {
    $scope.helloworld = function() {
        console.log("Hello world from the controller");
    };
    $scope.todos = [
        {"name" : "sortir les poubelles"},
        {"name" : "faire la vaisselle"}
    ];
});