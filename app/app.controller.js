keijibanApp.controller('appController', function($scope, $http, $location, $mdSidenav) {

    // Required for version info from the bower file
    $http.get('bower.json').then(function(response) {
        $scope.bower = response.data;
    });

    // Load all the required config from the master JSON file
    $http.get('app/app.config.json').then(function(response) {
        $scope.settings = response.data.settings;
        $scope.list = response.data.list;
        $scope.modules = response.data.boards.modules;
        $scope.boards = response.data.boards.data;
        function baseSlice(array, start, end) {
            var index = -1,
                length = array.length;
            if (start < 0) {
                start = -start > length ? 0 : (length + start);
            }
            end = end > length ? length : end;
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : ((end - start) >>> 0);
            start >>>= 0;
            var result = Array(length);
            while (++index < length) {
                result[index] = array[index + start];
            }
            return result;
        }
        function chunk(array, size) {
            size = Math.max(size, 0);
            var length = array ? array.length : 0;
            if (!length || size < 1) {
                return [];
            }
            var index = 0,
                resIndex = -1,
                result = Array(Math.ceil(length / size));
            while (index < length) {
                result[++resIndex] = baseSlice(array, index, (index += size));
            }
            return result;
        };
        $scope.chunks = chunk($scope.boards, $scope.list.maxWidth);
    });

    // On load return to the list page becuase the app is stateful
    window.onload = function() {
        $location.url("list");
    };

    // Generic function to build a toggler that opens/closes the sidenavs
    window.buildToggler = function(navID){
        return function() {
            $mdSidenav(navID).toggle();
        };
    };

});