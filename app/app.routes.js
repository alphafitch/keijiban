keijibanApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'app/components/list/listView.html',
            controller: 'listController'
        })
        .when('/noticeboard', {
            templateUrl: 'app/components/noticeboard/noticeboardView.html',
            controller: 'noticeboardController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);