keijibanApp.controller("boardController", function($scope, $rootScope, $location) {

    $scope.goToSelection = function(selection) {
        $rootScope.currentSelection = $scope.notices.indexOf(selection);
        $location.url("notice");
    };

});