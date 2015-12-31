keijibanApp.controller('boardController', function($scope, $rootScope) {

    $scope.currentBoard = $scope.boards[$rootScope.currentSelection];

    $scope.buildEventText = function() {
        var defaultText = $scope.modules.event.text,
            eventDate = $scope.currentBoard.event.date,
            eventStart = $scope.currentBoard.event.startTime,
            eventEnd = $scope.currentBoard.event.endTime;

            defaultText = defaultText.replace("{date}", eventDate);
            defaultText = defaultText.replace("{startTime}", eventStart);
            defaultText = defaultText.replace("{endTime}", eventEnd);

            return defaultText;
    };

    $scope.buildVenueText = function() {
        var defaultText = $scope.modules.venue.text,
            venueLocation = $scope.currentBoard.venue.location;

            defaultText = defaultText.replace("{location}", venueLocation);

            return defaultText;
    };

});