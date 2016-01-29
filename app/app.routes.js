keijibanApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'app/components/list/listView.html',
            controller: 'listController'
        })
        .when('/notice', {
            templateUrl: 'app/components/notice/noticeView.html',
            controller: 'noticeController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);