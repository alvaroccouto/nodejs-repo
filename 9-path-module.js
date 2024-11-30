const path = require ('path'); //buit-in Path module

//path separator
console.log (path.sep);

//normalize path
const filePath = path.join('subfolder','test.txt');
console.log(filePath);

//basename
console.log(path.basename(filePath));

//absolutepath
console.log(path.resolve(__dirname,'subfolder','test.txt'));
