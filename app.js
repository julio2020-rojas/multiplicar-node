/* jshint esversion:6 */

const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/mulltiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado:`.green + ` ${archivo}`.blue))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido...');

}