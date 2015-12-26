keijibanApp.controller('editMenuController', function($scope, $location,  $timeout, $mdSidenav, $log) {

    $scope.toggleEditMenu = buildToggler('editMenu');

    $scope.isOpenRight = function(){
        return $mdSidenav('editMenu').isOpen();
    };

    $scope.close = function () {
        $mdSidenav('editMenu').close();
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