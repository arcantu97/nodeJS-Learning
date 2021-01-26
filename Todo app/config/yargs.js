const argv = require('yargs')
    .command('create', 'Create element ToDo', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description from task'
        }
    })
    .command('update', 'Update task status', {
        index: {
            demand: true,
            alias: 'i',
            desc: 'Index from task'
        },
        status: {
            default: true,
            alias: 's',
            desc: 'Task status'
        }
    })
    .command('delete', 'Delete task', {
        index: {
            demand: true,
            alias: 'i',
            desc: 'Index from task'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}