(function (app) {

    maryjs.ReportsController = function ($scope, invSvc, productSvc) {
        $scope.listMode = true;
        $scope.report = "";
        $scope.backOrderAmount = 0;
        $scope.boProducts = [];

        $scope.price = productSvc.price;

        $scope.isViewing = function (r) {
            return $scope.report == r;
        }

        $scope.showList = function () {
            $scope.report = "";
            $scope.listMode = true;
        }

        $scope.renderBO = function () {
            console.log("get bo for " + $scope.backOrderAmount + " and lower.");
            var promise = invSvc.nearBO($scope.backOrderAmount);
            promise.then(
                function (products) {
                    $scope.listMode = false;

                    $scope.report = "bo";

                    $scope.boProducts = products;
                },
                function (err) {
                    alert(err);
                }
            );
        }
    };
    app.controller("maryjs.ReportsController",
        [
            "$scope",
            "maryjs.inventoryServices",
            "maryjs.productService",
            maryjs.ReportsController
        ]);
}(angular.module("maryjs.app")));