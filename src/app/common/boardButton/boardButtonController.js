keijiban.controller("boardButtonController", function($scope, $location, $window) {

    $scope.goToList = function() {
        $window.scrollTo(0, 0); // Jump to the top of the page
        $location.url("board");
    };

});