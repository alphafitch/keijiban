keijibanApp.controller('infoMenuController', function($scope, $location,  $timeout, $mdSidenav, $log) {

    $scope.toggleInfoMenu = buildToggler('infoMenu');

    $scope.isOpen = function(){
        return $mdSidenav('infoMenu').isOpen();
    };

    $scope.close = function () {
      $mdSidenav('infoMenu').close();
    };

    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);

            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID).toggle();
        };
    }

});