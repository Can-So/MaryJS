/// <reference path="/lib/angular.js" />

maryjs.app = angular.module("maryjs.app", ["ngRoute"])
    .config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider
            .when("/products", {
                templateUrl: "partials/inventory/products.html",
                controller: "maryjs.InventoryCtrl"
            }
        );
        $routeProvider
            .when('/new-order', {
                templateUrl: "partials/orders/new.html",
                controller: "maryjs.CreateOrderCtrl"
            }
        );
        $routeProvider
            .when('/orders', {
                templateUrl: "partials/orders/list.html",
                controller: "maryjs.ManageOrderController"
            }
        );
        $routeProvider
            .when('/labels', {
                templateUrl: "partials/labeling/index.html",
                controller: "maryjs.LabelsController"
            }
        );
        $routeProvider
            .when('/reports', {
                templateUrl: "partials/reports/list.html",
                controller: "maryjs.ReportsController"
            }
        );
        $routeProvider
            .when('/settings', {
                templateUrl: "partials/settings.html",
                controller: "maryjs.SettingsController"
            }
        );
        $routeProvider.otherwise({
            templateUrl: "partials/dashboard.html",
            controller: "maryjs.DashboardCtrl"
        });
    }]
);

maryjs.app.value("maryjs.inventoryDb", maryjs.inventory);
maryjs.app.value("maryjs.ordersDb", maryjs.orders);
maryjs.app.value("maryjs.labelWriter", maryjs.labelWriter);
maryjs.app.value("maryjs.failbackResources", maryjs.failbackResources);
maryjs.app.value("maryjs.resources", maryjs.resources);

maryjs.app.factory("maryjs.settings", function () {
    var settings = function () {
        angular.extend(this, {
            loaded: false,
            logo: "",
            name: "",
            address: "",
            city: "",
            province: "",
            postalCode: "",
            phone: "",
            invoiceNotes: "",
            tax1Rate: 0,
            tax1Name: "",
            tax2Rate: 0,
            tax2Name: "",
            appPath: "",
            lockKey: ""
        });
        if(localStorage.settings)
            angular.extend(this, JSON.parse(localStorage.settings));
    };
    return settings;
});

maryjs.app.directive("focusOn", function () {
    return function (scope, elem, attr) {
        scope.$on("focusOn", function (e, name) {
            if (name === attr.focusOn) {
                elem[0].focus();
            }
        });
    };
});

maryjs.app.factory('maryjs.focus', ["$rootScope", "$timeout", function($rootScope, $timeout) {
    return function (name) {
        $timeout(function() {
            $rootScope.$broadcast("focusOn", name);
        });
    }
}]);