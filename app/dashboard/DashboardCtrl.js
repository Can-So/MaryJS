/// <reference path="/lib/angular.js" />

(function (app) {

    maryjs.DashboardCtrl = function ($scope, settings) {
        $scope.store = new settings();

        function init() {
            if (!$scope.store.loaded)
                location.href = "#/settings";
        };

        init();
    };

    app.controller("maryjs.DashboardCtrl", ["$scope", "maryjs.settings", maryjs.DashboardCtrl]);
}(angular.module("maryjs.app")));