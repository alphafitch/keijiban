keijibanApp.controller('appController', function($scope, $http, $location) {

    $http.get('bower.json').then(function(response) {
        $scope.bower = response.data;
    });

    $http.get('app/app.config.json').then(function(response) {
        $scope.info = response.data.info;
        $scope.boards = response.data.boards;
    });

    // On load return to the list page becuase the app is stateful
    window.onload = function() {
        $location.url("list");
    };

});