// create http server
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Welcome to our home page 555.');
});
server.listen(3000,
    ()=>{
        console.log("server is started");
    });
