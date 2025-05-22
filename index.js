const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('✅ Hello from CI/CD app!');
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));
