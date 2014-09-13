(function (app) {

    maryjs.SettingsController = function ($scope, $timeout, settings) {
        $scope.store = new settings();
        $scope.saved = false;

        $scope.save = function () {
            $scope.store.loaded = true;
            localStorage.settings = JSON.stringify($scope.store);

            $scope.saved = true;

            $timeout(function () {
                $scope.saved = false;
            }, 3000);
        };
    };

    app.controller("maryjs.SettingsController", 
        [
            "$scope",
            "$timeout",
            "maryjs.settings",
            maryjs.SettingsController
        ])
}(angular.module("maryjs.app")));