const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let command = argv._[0];
let id = argv._[1];
switch (command) {
    case 'create':
        let task = todo.create(argv.description)
        break;
    case 'delete':
        let dTask = todo.deleteTask(argv.index)
        break;
    case 'update':
        let uTask = todo.updateTask(argv.index, argv.status)
        break;
    case 'show':
        let tasks = todo.readTasks();
        for (let task of tasks) {
            console.log('Task #', `${task.id}`.green);
            console.log('Description:', `${task.description}`.green);
            if (task.completed == false) {
                console.log('Status:', 'Not ready'.red);
            } else {
                console.log('Status:', 'Complete'.yellow);
            }
        }
        break;
    default:
        console.log('Command not recognized.');
        break;
}