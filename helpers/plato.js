import plato from 'plato';
import files from '../files';
let exec = require('child_process').exec;

const options = {
    title: 'Root Static Analysis',
    eslint: '../.eslintrc.json',
    recurse: true
}

function compile() {
    exec('babel-core ./app/**/*.js --out-dir tmp/plato',
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    //require("babel-core").transformFile(files.src.entry, { presets: ["es2015"] }, run);
    run();
}

function run() {
    plato.inspect('tmp/plato', files.dest.plato, options,() => {});
}

export default function () {
    compile();
}