{/* <reference path="./node_modules/angular/angular.js/" /> */ }

var app = angular.module('customerApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/todos',
            {
                controller: 'TodosController',
                templateUrl: 'views/todo.html'
            })
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
        .when('/customers/:customerId',
            {
                controller: 'CustomerDetailsController',
                templateUrl: 'views/customerDetails.html'
            })
        .otherwise({ redirectTo: '/customers' });
});