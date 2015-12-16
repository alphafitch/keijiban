var keijibanApp = angular.module('keijiban', ['ngMaterial', 'ngRoute']);

keijibanApp.directive('infoButton', function() {
    return {
        templateUrl: 'app/common/infoButton/infoButtonView.html',
        controller: 'infoButtonController'
    };
});

keijibanApp.directive('listButton', function() {
    return {
        templateUrl: 'app/common/listButton/listButtonView.html',
        controller: 'listButtonController'
    };
});

keijibanApp.directive('editMenu', function() {
    return {
        templateUrl: 'app/common/editMenu/editMenuView.html',
        controller: 'editMenuController'
    };
});

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
