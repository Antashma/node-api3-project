const express = require('express');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const server = express();

server.use(express.json());
server.use(logger);
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello Heroku!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const d = new Date();
  console.log(`Request: ${req.method}  | URL: ${req.path} | Timestamp: ${d.getHours()}:${d.getMinutes()}`);
  next();
};

module.exports = server;
