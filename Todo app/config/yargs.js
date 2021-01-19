const argv = require('yargs')
    .command('create', 'Create element ToDo', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description from task'
        }
    })
    .command('update', 'Update task status', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description from task'
        },
        completed: {
            default: true,
            alias: 'c',
            desc: 'Task details'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}