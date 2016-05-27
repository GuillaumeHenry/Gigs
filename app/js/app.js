'use strict';

/* App Module */

var gigsApp = angular.module('gigsApp', [
    'ngRoute',
    /*
    'gigsAnimations',
    */
    'gigsControllers',
    'gigsDirectives',
    /*
    'gigsFilters',
    */
    'gigsServices'
]);

gigsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/artists', {
            templateUrl: 'partials/artist-list.html',
            controller: 'ArtistListCtrl'
        }).
        when('/labels', {
            templateUrl: 'partials/labels.html',
            controller: 'ArtistListCtrl'
        }).
        when('/concerts', {
            templateUrl: 'partials/concerts.html',
            controller: 'ArtistListCtrl'
        }).
        otherwise({
            redirectTo: '/artists'
        });
}]);