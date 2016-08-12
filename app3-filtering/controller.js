angular.module('app').controller('mainCtrl', function ($scope, mainService) {

  $scope.employees = mainService.myData;

})
