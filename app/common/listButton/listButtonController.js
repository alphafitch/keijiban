keijibanApp.controller('listButtonController', function($scope, $location) {

    $scope.goToList = function() {
        $location.url("list");
    };

});