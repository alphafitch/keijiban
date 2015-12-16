keijibanApp.controller('infoButtonController', function($scope, $location) {

    $scope.goToInfo = function() {
        $location.url("info");
    };

});