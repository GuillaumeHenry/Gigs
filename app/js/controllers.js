'use strict';

/* Controllers */

var gigsControllers = angular.module('gigsControllers', []);

gigsControllers.controller('ArtistListCtrl', ['$scope', 'Artist', 'Concert',
  function($scope, Artist, Concert) {
    $scope.artists = Artist.query();
    $scope.gigs = Concert.query();
    $scope.orderProp = 'age';
}]);

