angular.module("todoListApp", [])
.controller("mainCtrl", function($scope) {
    $scope.helloworld = function() {
        console.log("Hello world from the controller");
    }
})

.controller("coolCtrl", function($scope) {
    $scope.coolMsg = function() {
        console.log("OK Cool");
    }
});