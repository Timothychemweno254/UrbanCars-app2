const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // This sets the base route to /api
server.listen(5001, () => {
  console.log('JSON Server is running');
});
