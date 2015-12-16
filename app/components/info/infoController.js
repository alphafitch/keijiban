keijibanApp.controller('infoController', function($scope, $http, $location) {

    $scope.buttonLabel = "list";

    $http.get('app/components/info/config.json').then(function(response) {
        $scope.info = response.data;
    });

});