'use strict';

var Toolset = angular.module('Toolset', [
    'ngRoute',
    'Toolset.Config',
    'Toolset.Controllers',
    'Toolset.Directives',
    'Toolset.Filters',
    'Toolset.Services'
]);

Toolset.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/index.html',
        controller: 'IndexController'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);