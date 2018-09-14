//const argv = require('yargs').argv;
const { argv } = require('./config/yargs');
const { add, getListado, setUpdate, setDelete } = require('./por-hacer/por-hacer');
//console.log(argv)


let comando = argv._[0]

switch (comando) {
    case 'save':
        let task = add(argv.d);
        console.log('Por hacer:', task.descripcion);
        break;
    case 'listar':
        getListado();

        break;
    case 'update':
        let actulizado = setUpdate(argv.d, argv.c);
        console.log('Actualizar una tareaPor hacer:', actulizado);
        break;
    case 'delete':
        let del = setDelete(argv.d);
        console.log(del);
        break;
    default:
        console.log('Comando no reconocido');

}