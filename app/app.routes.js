keijibanApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'app/components/list/listView.html',
            controller: 'listController'
        })
        .when('/board', {
            templateUrl: 'app/components/board/boardView.html',
            controller: 'boardController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);