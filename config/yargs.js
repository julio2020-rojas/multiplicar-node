/* jshint esversion:6 */

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'recibe la base y crea el archivo con un limite', opts)
    .help()
    .argv;

module.exports = {
    argv
};