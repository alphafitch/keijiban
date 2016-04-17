keijibanApp.controller('boardButtonController', function($scope, $location) {

    $scope.goToList = function() {
        $location.url("board");
    };

});