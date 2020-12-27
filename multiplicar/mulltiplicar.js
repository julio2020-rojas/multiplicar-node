/* jshint esversion:6 */

const fs = require('fs');
const color = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('============================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('============================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}`);
    }

};
let crearArchivo = (base, limite = 10) => {
    console.log(limite);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            console.log(`el valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err); // imprime el error
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    }); // termina la promesa
};
module.exports = {
    crearArchivo,
    listarTabla // es6 no es necesario redefinir el nombre, este es un funcion del objeto
};