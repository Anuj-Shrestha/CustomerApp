

app.controller('CustomerController', function($scope, customerService) {
    $scope.customers = customerService.getCustomers();
});