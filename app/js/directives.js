'use strict';

/* Directives */

var gigsDirectives = angular.module('gigsDirectives', []).directive('navBar', function () {
    return {
        restrict: "E",
        templateUrl: "partials/navbar.html"
    };
})
.directive('pagiNation', function () {
    return {
        restrict:"E",
        templateUrl:"partials/pagination.html"
    };
}).directive('fooTer', function () {
    return {
        restrict:"E",
        templateUrl:"partials/footer.html"
    };
});