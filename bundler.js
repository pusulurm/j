/**
 * Created by pusulurm on 9/24/2015.
 */
var jspm = require('jspm');
console.log('started..!');
jspm.bundle('github:pusulurm/directive1@master','dist/directive1/directive1.js',{sourceMaps: true, inject: true});
jspm.bundle('github:pusulurm/directive2@master','dist/directive2/directive2.js',{sourceMaps: true, inject: true});
console.log('completed..!');