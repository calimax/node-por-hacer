const opts1 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    }
}
const opts2 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    },
    done: {
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea',
        default: true
    }
}

const argv = require('yargs')
    .command('save', 'crear un elemento por hacer ', opts1)
    .command('update', 'Actualizar un elemento por hacer ', opts2)
    .help()
    .argv;



module.exports = {
    argv
}