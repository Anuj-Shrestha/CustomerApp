

app.controller('CustomerController', function($scope, customerService) {
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

});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

app.controller('OrdersController', function ($scope, customerService) {
    $scope.customers = customerService.getCustomers();
});

app.controller('OrderChildController', function($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        if ($scope.customer && $scope.customer.orders) {
            var total = 0.00;
            $scope.customer.orders.map(order => total += order.orderTotal);
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    }
});