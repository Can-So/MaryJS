(function (app) {

    maryjs.ManageOrderController = function ($scope, orderSvc, order, orderCalculator, productSvc) {
        $scope.viewMode = false;
        $scope.selectedOrder = {};
        $scope.orders = [];
        $scope.searchText = "";

        $scope.price = productSvc.price;
        $scope.subTotal = orderCalculator.subTotal;
        $scope.discount = orderCalculator.discount;
        $scope.realSubTotal = orderCalculator.realSubTotal;
        $scope.tax1 = orderCalculator.tax1;
        $scope.tax2 = orderCalculator.tax2;
        $scope.total = orderCalculator.total;
        $scope.returnAmount = orderCalculator.returnAmount;


        function init() {
            var promise = orderSvc.all();
            promise.then(
                function (orders) {
                    $scope.orders = orders;
                },
                function (err) {
                    alert(err);
                }
            );
        }

        $scope.view = function (order) {
            $scope.viewMode = true;
            $scope.selectedOrder = order;
        }

        $scope.remove = function () {
            var promise = orderSvc.del($scope.selectedOrder._id);
            promise.then(
                function (count) {
                    var orders = [];
                    angular.forEach($scope.orders, function (o) {
                        if (o._id != $scope.selectedOrder._id) {
                            orders.push(o);
                        }
                        $scope.orders = orders;
                    });

                    $scope.viewMode = false;
                    $scope.selectedOrder = {};
                },
                function (err) {
                    alert(err);
                }
            );
        };

        init();
    };

    app.controller("maryjs.ManageOrderController",
        [
            "$scope",
            "maryjs.orderServices",
            "maryjs.order",
            "maryjs.orderCalculator",
            "maryjs.productService",
            maryjs.ManageOrderController
        ]);
}(angular.module("maryjs.app")));