keijibanApp.controller('noticeboardController', function($scope, $rootScope) {

    $scope.currentBoard = $scope.boards[$rootScope.currentSelection];

});