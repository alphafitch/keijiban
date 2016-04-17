keijiban.controller("infoMenuController", function($scope, $mdSidenav) {

    $scope.toggleInfoMenu = buildToggler("infoMenu");

    $scope.isOpen = function(){
        return $mdSidenav("infoMenu").isOpen();
    };

    $scope.close = function () {
      $mdSidenav("infoMenu").close();
    };

});