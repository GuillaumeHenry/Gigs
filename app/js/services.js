'use strict';

/* Services */

var gigsServices = angular.module('gigsServices', ['ngResource'])
.factory('Artist', ['$resource',
  function($resource){
    return $resource('http://promoteapi.herokuapp.com/artists/:artistId', {artistId:"@id"}, {'query' : {method: 'GET', isArray:false}});
  }
])
.factory('Label', ['$resource',
  function($resource){
    return $resource('http://promoteapi.herokuapp.com/labels/:labelId', {labelId:"@id"}, {'query' : {method: 'GET', isArray:false}});
  }
])
.factory('Gig', ['$resource',
  function($resource){
    return $resource('http://promoteapi.herokuapp.com/gigs/:gigId', {gigId:"@id"}, {'query' : {method: 'GET', isArray:false}});
  }
]);

