var keijiban = angular.module("keijiban", ["ngMaterial", "ngRoute"]);

// Theme
keijiban.config(function($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette("teal", {
            'default': '900', // by default use shade 900 from the colour palette
        })
        .accentPalette("pink");
});

// Buttons for navigation and showing extra menus

keijiban.directive("boardButton", function() {
    return {
        templateUrl: "src/app/common/boardButton/boardButtonView.html",
        controller: "boardButtonController"
    };
});

keijiban.directive("infoMenu", function() {
    return {
        templateUrl: "src/app/common/infoMenu/infoMenuView.html",
        controller: "infoMenuController"
    };
});

keijiban.directive("editMenu", function() {
    return {
        templateUrl: "src/app/common/editMenu/editMenuView.html",
        controller: "editMenuController"
    };
});

// Modules which are reusable building blocks for notices

keijiban.directive("contactModule", function() {
    return {
        templateUrl: "src/app/common/noticeModules/contact/contactView.html"
    };
});

keijiban.directive("descriptionModule", function() {
    return {
        templateUrl: "src/app/common/noticeModules/description/descriptionView.html"
    };
});

keijiban.directive("eventModule", function() {
    return {
        templateUrl: "src/app/common/noticeModules/event/eventView.html"
    };
});

keijiban.directive("topicsModule", function() {
    return {
        templateUrl: "src/app/common/noticeModules/topics/topicsView.html"
    };
});

keijiban.directive("venueModule", function() {
    return {
        templateUrl: "src/app/common/noticeModules/venue/venueView.html"
    };
});

// Filters for useful reusable behaviour

keijiban.filter("stripHyphen", function() {
    return function(string) {
        return string.replace(/-/g, " ");
    };
});

keijiban.filter("titleCase", function() {
    return function(string) {
        string = string || "";
        return string.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
});

keijiban.filter("range", function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    };
});