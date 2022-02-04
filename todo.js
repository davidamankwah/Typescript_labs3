"use strict";
exports.__esModule = true;
var todo = /** @class */ (function () {
    function todo() {
        this.tasks = [];
    }
    todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("----   New Task Added     -----  ");
        console.log("Task " + task + "inserted in list");
        return this.tasks.length;
    };
    todo.prototype.listAllItems = function () {
        console.log("START: ALL items in Array:");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: ALL items in Array:");
    };
    todo.prototype.deleTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("---- Task removed  ------");
            console.log("Task " + task + "removed from list");
        }
        return this.tasks.length;
    };
    return todo;
}());
var mytodo = new todo();
mytodo.addTask("eat");
mytodo.addTask("sleep");
mytodo.listAllItems();
mytodo.deleTask("eat");
