// Orders controller

app.controller('OrdersController', function ($scope, customerService) {
    $scope.customers = customerService.getCustomers();
});

app.controller('OrderChildController', function ($scope) {
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