'use strict';

/* Services */

var gigsServices = angular.module('gigsServices', ['ngResource']);

gigsServices.factory('Artist', ['$resource',
  function($resource){
    return $resource('http://promoteapi.herokuapp.com/artists?embed[]=gigs&embed[]=labels', {}, {
      query: {method:'GET', params:{artistId:'artists'}, isArray:false}
    });
}]);

gigsServices.factory('Concert', ['$resource',
  function($resource){
    return $resource('http://promoteapi.herokuapp.com/gigs', {}, {
      query: {method:'GET', params:{concertId:'gigs'}, isArray:false}
    });
}]);