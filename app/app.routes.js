keijibanApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'app/components/list/listView.html',
            controller: 'listController'
        })
        .when('/info', {
            templateUrl: 'app/components/info/infoView.html',
            controller: 'infoController'
        })
        .when('/noticeboard', {
            templateUrl: 'app/components/noticeboard/noticeboardView.html',
            controller: 'noticeboardController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);