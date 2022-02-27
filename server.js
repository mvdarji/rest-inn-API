const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1001;

server.use(middlewares);
server.use(router);

server.listen(port);