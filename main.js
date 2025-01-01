const http = require('http');

const server = http.createServer((req, res) => {
  // TODO: Implement this function
  const details = {
    header: req.header,
    url: req.url,
    method: req.method
  }
  if(req.method === 'GET' || req.method === 'POST'){
    res.end(JSON.stringify({message: "Request recieved", requestDetails: details}));
  }else{
    res.end(JSON.stringify({message: "Method not found"}))
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = { server };
