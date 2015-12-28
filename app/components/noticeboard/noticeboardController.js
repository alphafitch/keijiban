keijibanApp.controller('noticeboardController', function($scope, $rootScope) {

    $scope.currentBoard = $scope.boards[$rootScope.currentSelection];

    // Modifies the default event text to fit the config for each noticeboard
    $scope.buildEventModuleText = function() {
        var defaultText = $scope.modules.event.text,
            eventDate = $scope.currentBoard.event.date,
            eventStart = $scope.currentBoard.event.startTime,
            eventEnd = $scope.currentBoard.event.endTime;

            defaultText = defaultText.replace("{date}", eventDate);
            defaultText = defaultText.replace("{startTime}", eventStart);
            defaultText = defaultText.replace("{endTime}", eventEnd);

            return defaultText;
    };

    // Modifies the default venue text to fit the config for each noticeboard
    $scope.buildVenueModuleText = function() {
        var defaultText = $scope.modules.venue.text,
            venueLocation = $scope.currentBoard.venue.location;

            defaultText = defaultText.replace("{location}", venueLocation);

            return defaultText;
    };

});