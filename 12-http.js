const http = require('http');
const server = http.createServer ((req, res)=>{
  //req - it is the request coming to our server
  //res - it is the response we are providing for that particular req
  console.log(req);
  if(req.url === '/'){
    res.end('WElcome to our home page');
  }
  if(req.url === '/about'){
    res.end('Welcome to our about page');
  }  
  res.end(`<h1> Oops! Page not found!</h1>
    <a href="/">Back home</a>`);
  //res.write('Welcome to our home page');
  //res.end();
})
server.listen(5000);
