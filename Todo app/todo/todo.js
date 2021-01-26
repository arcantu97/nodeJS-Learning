const fs = require('fs');
const { number } = require('yargs');

let todoTasks = [];

const readTasks = () => {
    readDB();
    return todoTasks;
}

const readDB = () => {
    try {
        todoTasks = require('../db/mytasks.json');
    } catch (error) {
        todoTasks = [];
    }
}

const LoadToDB = () => {
    let data = JSON.stringify(todoTasks);
    fs.writeFile('db/mytasks.json', data,
        (err) => {
            if (err) throw new Error('File cannot be created', err);
        });
}

const create = (description) => {

    readDB();

    if (todoTasks.length == 0) {
        let ToDo = {
            id: 0,
            description,
            completed: false
        }

        todoTasks.push(ToDo);
        LoadToDB();
        return todoTasks;

    } else {
        let index = todoTasks.length;
        let ToDo = {
            id: index,
            description,
            completed: false
        }

        todoTasks.push(ToDo);
        LoadToDB();
        return todoTasks;
    }
}

const updateTask = (indexSelected, status) => {
    readDB();
    let taskIndex = todoTasks.findIndex(task => task.id === indexSelected)
    if (taskIndex >= 0) {
        todoTasks[taskIndex].completed = status;
        LoadToDB();
        console.log(`Task ${todoTasks[taskIndex].id} has been changed to ${todoTasks[taskIndex].completed}`);
        return true;
    } else {
        return false;
    }
}

const deleteTask = (indexSelected) => {
    readDB();
    let todos = todoTasks.filter(task => { return task.id !== indexSelected });
    if (todoTasks.length === todos.length) {
        return false;
    } else {
        LoadToDB();
        console.log(`Task ${indexSelected} has been deleted`);
        return true;
    }
}



module.exports = {
    create,
    readTasks,
    updateTask,
    deleteTask
}