const http = require('http');

const server = http.createServer((req, res) => {
  // TODO: Implement this function
  let details= {
    method: req.method,
    url: req.url,
    headers: req.headers
  }
  if(req.method === 'GET'){
    res.end(JSON.stringify(details));
  }
  if(req.method==='POST'){
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    })
    details.body = body ? JSON.parse(body) : {};
    req.on('end', ()=>{
      res.end(JSON.stringify(details));
    })
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = { server };
