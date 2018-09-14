const fs = require('fs');
const colors = require('colors');
let listPorHacer = [];



const add = (descripcion) => {

    getDatos();

    let toDo = {
        descripcion, //cuando el valor se llama igual que la etiqueta
        done: false
    }

    listPorHacer.push(toDo);
    saveData();

    return toDo;
};


const saveData = () => {

    let data = JSON.stringify(listPorHacer);

    var nombre = 'datos/datos.json';

    fs.writeFile(nombre, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar:');
    });


}
const getDatos = () => {

    try {
        listPorHacer = require('../datos/datos.json')
    } catch (e) {
        listPorHacer = [];
    }

}
const getListado = () => {

    getDatos();
    for (let task of listPorHacer) {

        console.log('========task to Do========'.green);
        console.log(`${task.descripcion} Estado: ${task.done}`);
        console.log('=========================='.green);
    }

}
const setUpdate = (descripcion, done = true) => {

    let index = findIndex(descripcion);

    if (index >= 0) {
        listPorHacer[index].done = done
        saveData();
        return true;
    } else
        return false;



}
const findIndex = (descripcion) => {
    getDatos();

    let index = listPorHacer.findIndex(task => task.descripcion === descripcion);


    return index;

}
const setDelete = (descripcion) => {

    let index = findIndex(descripcion);

    if (index >= 0) {
        listPorHacer.splice(index, 1);
        saveData();
        return true;
    } else
        return false;

}
module.exports = {
    add,
    getListado,
    setUpdate,
    setDelete
}