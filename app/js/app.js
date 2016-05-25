'use strict';

/* App Module */

var gigsApp = angular.module('gigsApp', [
    'ngRoute',
    /*
    'gigsAnimations',
    */
    'gigsControllers',
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
        when('/artists/:artistId', {
            templateUrl: 'partials/artist-detail.html',
            controller: 'ArtistDetailCtrl'
        }).
        otherwise({
            redirectTo: '/artists'
        });
    }]);