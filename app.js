const http = require('http');

http.createServer((req, res) => {
    res.write("Hello Bhanu! Jenkins CI/CD 🚀");
    res.end();
}).listen(3000);

