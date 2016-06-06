'use strict';

/* Services */

var gigsServices = angular.module('gigsServices', ['ngResource']);

gigsServices.factory('Artist', ['$resource',
  function($resource){
    return $resource('http://promoteapi.herokuapp.com/artists/:artistId', {artistId:"@id"}, {'query' : {method: 'GET', isArray:false}});
  }
]);

