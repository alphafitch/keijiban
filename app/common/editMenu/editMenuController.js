keijibanApp.controller('editMenuController', function($scope, $location,  $timeout, $mdSidenav, $log) {

    $scope.toggleEditMenu = buildToggler('editMenu');

    $scope.isOpenRight = function(){
        return $mdSidenav('editMenu').isOpen();
    };

    $scope.close = function () {
        $mdSidenav('editMenu').close();
    };

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID).toggle();
        };
    }

});