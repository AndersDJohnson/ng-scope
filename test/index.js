var app = angular.module('app', ['ngScope']);

console.log("app", app);

app.controller('TestController', ['$scope', function ($scope) {
  $scope.rootName = 'Root Name';
  console.log('ctrl', this);
}]);
