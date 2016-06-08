'use strict';

/* Controllers */

var gigsControllers = angular.module('gigsControllers', ['ngRoute']);

gigsControllers.controller('ArtistCtrl', ['$scope', '$routeParams', 'Artist',
  function ($scope, $routeParams, Artist) {
    $scope.artists = Artist.query({"embed[]":["gigs", "labels"], artistId: $routeParams.artistId});
  }
])
.controller('LabelCtrl', ['$scope', '$routeParams', 'Label',
  function ($scope, $routeParams, Label) {
    $scope.labels = Label.query({"embed[]":["gigs", "artists"], labelId: $routeParams.labelId});
  }
])
.controller('GigCtrl', ['$scope', '$routeParams', 'Gig',
  function ($scope, $routeParams, Gig) {
    $scope.gigs = Gig.query({"embed[]":["labels", "artists"], gigId: $routeParams.gigId});
  }
]);
