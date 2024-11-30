const os = require ('os'); //buit-in OS module

//info about current user
const user = os.userInfo();
console.log (user);

//method return the system uptime in seconds
console.log(`The system uptime is: ${os.uptime/60/60}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem()/1024/1024/1024,
  freeMem: os.freemem()/1024/1024/1024,
}
console.log(currentOS);