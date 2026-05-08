const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Points to your pushed file
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Optional: Rewrites /api/* to /* so you can use /api/posts
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}));
server.use(router);

// Export the server for Vercel's serverless environment
module.exports = server;