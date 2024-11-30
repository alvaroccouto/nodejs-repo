//CommonJS, every file is module (by default)
//Modules - encapsulated code (only share mininum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data  = require('./6-alternative-flavor');

require('./7-mind-grenade'); //that will run any function inside this module

/*sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);*/

console.log(data);
