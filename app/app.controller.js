keijibanApp.controller('appController', function($scope, $http, $location) {

    $http.get('bower.json').then(function(response) {
        $scope.bower = response.data;
    });

    $http.get('app/app.config.json').then(function(response) {
        $scope.boards = response.data;
    });

    // On load return to the list page becuase the app is stateful
    window.onload = function() {
        $location.url("list");
    };

});