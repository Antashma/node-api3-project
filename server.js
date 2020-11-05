const express = require('express');
const User = require('./users/userDb.js')
const Post = require('./posts/postDb.js')

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
