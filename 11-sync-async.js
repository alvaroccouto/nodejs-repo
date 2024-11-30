const {readFile, writeFile} = require('fs');//asynchronous

console.log('start');
const firstFile = readFile('./content/first.txt', 'utf8', (err,result) => { //callback below
  if(err){
    console.log(err);
    return;
  }
  const firstFile = result;
  readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err){
      console.log(err);
      return; 
    }
    const secondFile = result;
    writeFile('./content/result-async.txt',`Here is the result: ${firstFile}, ${secondFile}`,(err,result)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
    });
  })
});
console.log('starting with next task');
