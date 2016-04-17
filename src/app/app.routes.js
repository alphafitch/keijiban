keijibanApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/board", {
            templateUrl: "src/app/components/board/boardView.html",
            controller: "boardController"
        })
        .when("/notice", {
            templateUrl: "src/app/components/notice/noticeView.html",
            controller: "noticeController"
        })
        .otherwise({
            redirectTo: "/board"
        });
}]);