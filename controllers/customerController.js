

app.controller('CustomerController', function ($scope, customerService) {
    $scope.customers = customerService.getCustomers();

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customerService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customerService.deleteCustomer(id);
    }

});

app.controller('CustomerOrdersController', function ($scope, $routeParams, customerService) {
    $scope.customer = {};
    $scope.ordersTotal = 0.00;
    
    init();

    function init() {
        var customerId = $routeParams.customerId ? parseInt($routeParams.customerId) : 0;

        if (customerId > 0)
            $scope.customer = customerService.getCustomerById(customerId);
    }
});