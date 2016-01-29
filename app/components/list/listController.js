keijibanApp.controller('listController', function($scope, $rootScope, $location) {

    $scope.goToSelection = function(selection) {
        $rootScope.currentSelection = $scope.boards.indexOf(selection);
        $location.url("notice");
    };

});