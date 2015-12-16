keijibanApp.controller('noticeboardController', function($scope, $rootScope) {

    $scope.buttonLabel = "back";
    $scope.currentBoard = $scope.boards[$rootScope.currentSelection];

});