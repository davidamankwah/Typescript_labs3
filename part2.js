var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("----   New Task Added     -----  ");
    console.log("Task " + task + "inserted in list");
    return task.length;
}
function listAllTasks() {
    console.log("START: ALL items in Array:");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("END: ALL items in Array:");
}
function deleTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("---- Task removed  ------");
        console.log("Task " + task + "removed from list");
    }
    return tasks.length;
}
var x = addTask("wake up");
console.log("number of items in list: " + x);
addTask("sleep");
listAllTasks();
deleTask("sleep");
