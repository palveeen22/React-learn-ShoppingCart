const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(function (req, res, next) {
  if (req.method === "POST") {
    const randomTimeout = Math.floor(Math.random() * (10000 - 2000) + 2000);
    console.log("delay : ", randomTimeout);
    setTimeout(() => {
      next();
    }, randomTimeout);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);
server.listen(9000, () => {
  console.log("JSON Server is running");
});
