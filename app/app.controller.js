keijibanApp.controller('appController', function($scope, $http, $location, $mdSidenav) {

    // Required for version info from the bower file
    $http.get('bower.json').then(function(response) {
        $scope.bower = response.data;
    });

    // Load all the required config from the master JSON file
    $http.get('app/app.config.json').then(function(response) {

        // Set scope variables using the config data
        $scope.settings = response.data.settings;
        $scope.board = response.data.board;
        $scope.modules = response.data.notices.modules;
        $scope.notices = response.data.notices.data;

        // Chunk up the list of boards so that the grid can be displayed to match the config
        $scope.chunks = chunk($scope.notices, $scope.board.maxWidth);
    });

    // Calculates the size of the sub array in a 2D 'chunked' array
    window.baseSlice = function(array, start, end) {
        var index = -1,
            length = array.length,
            result = 0;

        if (start < 0) {
            start = -start > length ? 0 : (length + start);
        }
        end = end > length ? length : end;
        if (end < 0) {
            end += length;
        }
        length = start > end ? 0 : ((end - start) >>> 0);
        start >>>= 0;
        result = Array(length);
        while (++index < length) {
            result[index] = array[index + start];
        }

        return result;
    };

    // Converts a normal array into a 2D array
    window.chunk = function(array, size) {
        var length = array ? array.length : 0,
            index = 0,
            resIndex = -1,
            result = Array(Math.ceil(length / size));

        size = Math.max(size, 0);
        if (!length || size < 1) {
            return [];
        }
        while (index < length) {
            result[++resIndex] = baseSlice(array, index, (index += size));
        }

        return result;
    };

    // On load return to the board page becuase the app is stateful
    window.onload = function() {
        $location.url("board");
    };

    // Generic function to build a toggler that opens/closes the sidenavs
    window.buildToggler = function(navID){
        return function() {
            $mdSidenav(navID).toggle();
        };
    };

});