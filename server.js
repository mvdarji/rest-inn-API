// deployed this repo on heroku:
// heroku link: https://rest-inn-api-mvdarji.herokuapp.com/

const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`API Server is Running on port: ${port}`);
});