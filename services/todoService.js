// Service for adding, editing, removing todos

app.service('todoService', function () {
    this.getTodos = function () {
        return todos;
    }
    var todos = [
        { id: 1, task: 'Learn Angular', isCompleted: false },
        { id: 2, task: 'Go Shoping', isCompleted: false },
        { id: 3, task: 'Read books', isCompleted: false },
        { id: 4, task: 'Do Homework', isCompleted: false },
        { id: 5, task: 'Fire dave from work', isCompleted: false },
        { id: 6, task: 'Buy socks', isCompleted: true },
        { id: 7, task: 'Get a jar of water', isCompleted: true },
        { id: 8, task: 'Become expert in one stack', isCompleted: false },
    ];
});