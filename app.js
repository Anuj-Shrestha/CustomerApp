{/* <reference path="./node_modules/angular/angular.js/" /> */ }

var app = angular.module('customerApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/customers',
            {
                controller: 'CustomerController',
                templateUrl: 'views/customers.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: 'views/orders.html'
            })
        .otherwise({ redirectTo: '/customers' });
});