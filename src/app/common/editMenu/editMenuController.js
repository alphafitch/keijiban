keijibanApp.controller('editMenuController', function($scope, $mdSidenav) {

    $scope.toggleEditMenu = buildToggler('editMenu');

    $scope.isOpenRight = function(){
        return $mdSidenav('editMenu').isOpen();
    };

    $scope.close = function () {
        $mdSidenav('editMenu').close();
    };

});