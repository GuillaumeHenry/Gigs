'use strict';

/* App Module */

var gigsApp = angular.module('gigsApp', [
    'ngRoute',
    /*
    'gigsAnimations',
    */
    'gigsControllers',
    'gigsDirectives',
    /*'gigsFilters',*/
    'gigsServices'
]);

gigsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/artists', {
            templateUrl: 'partials/artist-list.html',
            controller: 'ArtistCtrl'
        }).
        when('/artists/:artistId', {
            templateUrl: 'partials/artist-detail.html',
            controller: 'ArtistCtrl'
        }).
        when('/labels', {
            templateUrl: 'partials/label-list.html',
            controller: 'LabelCtrl'
        }).
        when('/labels/:labelId', {
            templateUrl: 'partials/label-detail.html',
            controller: 'LabelCtrl'
        }).
        when('/gigs', {
            templateUrl: 'partials/gig-list.html',
            controller: 'GigCtrl'
        }).
        when('/gigs/:gigId', {
            templateUrl: 'partials/gig-detail.html',
            controller: 'GigCtrl'
        }).
        otherwise({
            redirectTo: '/artists'
        });
}]);
