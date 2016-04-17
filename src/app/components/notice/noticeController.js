keijibanApp.controller("noticeController", function($scope, $rootScope) {

    $scope.currentNotice = $scope.notices[$rootScope.currentSelection];

    $scope.buildEventText = function() {
        var defaultText = $scope.modules.event.text,
            eventDate = $scope.currentNotice.event.date,
            eventStart = $scope.currentNotice.event.startTime,
            eventEnd = $scope.currentNotice.event.endTime;

            defaultText = defaultText.replace("{date}", eventDate);
            defaultText = defaultText.replace("{startTime}", eventStart);
            defaultText = defaultText.replace("{endTime}", eventEnd);

            return defaultText;
    };

    $scope.buildVenueText = function() {
        var defaultText = $scope.modules.venue.text,
            venueLocation = $scope.currentNotice.venue.location;

            defaultText = defaultText.replace("{location}", venueLocation);

            return defaultText;
    };

});