// Service for adding, editing, removing todos

app.service('todoService', function () {
    this.getTodos = function () {
        return todos;
    }

    this.insertTodo = function (newTask) {
        var topId = todos.length + 1;
        var newTodo = {id: topId, task: newTask, isCompleted: false, showEditForm: false};
        todos.push(newTodo);
    }

    this.getTodoById = function(id) {
        return todos.find(todo => todo.id === id);
    }

    this.deleteTodo = function (id) {
        var indexOfTodo = todos.indexOf(this.getTodoById(id));
        todos.splice(indexOfTodo, 1);
    }

    this.showEditTodoForm = function (id) {
        var indexOfTodo = todos.indexOf(this.getTodoById(id));
        todos[indexOfTodo].showEditForm = !todos[indexOfTodo].showEditForm;
    }

    var todos = [
        { id: 1, task: 'Learn Angular', isCompleted: false, showEditForm: false },
        { id: 2, task: 'Go Shoping', isCompleted: false, showEditForm: false },
        { id: 3, task: 'Read books', isCompleted: false, showEditForm: false },
        { id: 4, task: 'Do Homework', isCompleted: false, showEditForm: false },
        { id: 5, task: 'Fire dave from work', isCompleted: false, showEditForm: false },
        { id: 6, task: 'Buy socks', isCompleted: true, showEditForm: false },
        { id: 7, task: 'Get a jar of water', isCompleted: true, showEditForm: false },
        { id: 8, task: 'Become expert in one stack', isCompleted: false, showEditForm: false },
    ];
});