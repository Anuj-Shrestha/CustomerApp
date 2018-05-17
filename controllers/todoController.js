// Controller for todos

app.controller('TodosController', function ($scope, todoService) {
    $scope.todos = todoService.getTodos();

    $scope.insertTodo = function() {
        var newTask = $scope.newTodo.task;
        todoService.insertTodo(newTask);
        $scope.newTodo.task = '';
    }

    $scope.deleteTodo = function(id) {
        todoService.deleteTodo(id);
    }
});
