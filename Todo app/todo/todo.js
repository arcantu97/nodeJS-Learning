const fs = require('fs');

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

const LoadToDB = () => {
    let data = JSON.stringify(todoTasks);
    fs.writeFile('db/mytasks.json', data,
        (err) => {
            if (err) throw new Error('File cannot be created', err);
        });
}

module.exports = {
    create,
    readTasks
}