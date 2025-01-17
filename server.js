const { createServer } = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    fs.readFile('418error.html', (err, data) => {
    res.writeHead(418, {'Content-Type': 'text/HTML'});
    res.write(data);
    res.end();
    });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});