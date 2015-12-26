keijibanApp.controller('infoMenuController', function($scope, $location,  $timeout, $mdSidenav, $log) {

    $scope.toggleInfoMenu = buildToggler('infoMenu');

    $scope.isOpen = function(){
        return $mdSidenav('infoMenu').isOpen();
    };

    $scope.close = function () {
      $mdSidenav('infoMenu').close();
    };

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID).toggle();
        };
    }

});