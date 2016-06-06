'use strict';

/* Controllers */

var gigsControllers = angular.module('gigsControllers', ['ngRoute']);

gigsControllers.controller('ArtistListCtrl', ['$scope', 'Artist',
  function($scope, Artist) {
    $scope.artists = Artist.query({"embed[]":["gigs", "labels"]});
    
  }
])
.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'Artist',
  function ($scope, $routeParams, Artist) {
    $scope.artistDetail = Artist.query({"embed[]":["gigs", "labels"], artistId: $routeParams.artistId});
  }
]);

