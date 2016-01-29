keijibanApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/board', {
            templateUrl: 'app/components/board/boardView.html',
            controller: 'boardController'
        })
        .when('/notice', {
            templateUrl: 'app/components/notice/noticeView.html',
            controller: 'noticeController'
        })
        .otherwise({
            redirectTo: '/board'
        });
}]);