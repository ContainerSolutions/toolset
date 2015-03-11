'use strict';

angular.module('Toolset.Controllers', [])
    .controller('IndexController', function($scope, $sce, config) {
        $scope.host = config.host;
        $scope.applications = config.applications;
        $scope.modalData = {};
        $scope.setModal = function(key) {
            $scope.modalData = config.applications[key];
            $scope.modalData.description = $sce.trustAsHtml($scope.modalData.description);
        };
    });
