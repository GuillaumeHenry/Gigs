'use strict';

/* Controllers */

var gigsControllers = angular.module('gigsControllers', []);

gigsControllers.controller('ArtistListCtrl', ['$scope', 'Artist', 'Concert',
  function($scope, Artist, Concert) {
    $scope.artists = Artist.query();
    $scope.gigs = Concert.query();
    $scope.orderProp = 'age';
  }]);

gigsControllers.controller('ArtistDetailCtrl', ['$scope', '$routeParams', 'Artist', 'Concert',
  function($scope, $routeParams, Artist, Concert) {
    $scope.artist = Artist.get({artistId: $routeParams.artistId}, function(artist) {
      $scope.mainImageUrl = artist.images[0];
    });

    $scope.concert = Concert.get({concertId: $routeParams.concertId}, function(concert) {
      $scope.mainImageUrl = concert.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
