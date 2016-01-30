var keijibanApp = angular.module('keijiban', ['ngMaterial', 'ngRoute']);

// Buttons for navigation and showing extra menus

keijibanApp.directive('boardButton', function() {
    return {
        templateUrl: 'app/common/boardButton/boardButtonView.html',
        controller: 'boardButtonController'
    };
});

keijibanApp.directive('infoMenu', function() {
    return {
        templateUrl: 'app/common/infoMenu/infoMenuView.html',
        controller: 'infoMenuController'
    };
});

keijibanApp.directive('editMenu', function() {
    return {
        templateUrl: 'app/common/editMenu/editMenuView.html',
        controller: 'editMenuController'
    };
});

// Modules which are reusable building blocks for notices

keijibanApp.directive('contactModule', function() {
    return {
        templateUrl: 'app/common/noticeModules/contact/contactView.html'
    };
});

keijibanApp.directive('descriptionModule', function() {
    return {
        templateUrl: 'app/common/noticeModules/description/descriptionView.html'
    };
});

keijibanApp.directive('eventModule', function() {
    return {
        templateUrl: 'app/common/noticeModules/event/eventView.html'
    };
});

keijibanApp.directive('topicsModule', function() {
    return {
        templateUrl: 'app/common/noticeModules/topics/topicsView.html'
    };
});

keijibanApp.directive('venueModule', function() {
    return {
        templateUrl: 'app/common/noticeModules/venue/venueView.html'
    };
});

// Filters for useful reusable behaviour

keijibanApp.filter('stripHyphen', function() {
    return function(string) {
        return string.replace(/-/g, ' ');
    };
});

keijibanApp.filter('titleCase', function() {
    return function(string) {
        string = string || '';
        return string.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
});

keijibanApp.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    };
});