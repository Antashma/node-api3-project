const express = require('express');
const dbUser = require('./userDb')
const dbPost = require('../posts/postDb')
const router = express.Router();

router.post('/', (req, res) => {
  dbUser.insert(req.body)
    .then(newUser => {
      res.status(201).json(newUser)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'There was an error posting this user...'
      })
    })
});

router.post('/:id/posts', (req, res) => {
    const {id} =  req.params;
    const body = {...req.body, user_id: id}
    dbPost.insert(body)
      .then(newPost => {
        res.status(201).json(newPost);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: 'There was an error adding a post for this user...'
        })
    })
});

router.get('/', (req, res) => {
  // do your magic!
  dbUser.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: 'There was an error retrieving users...'
    })
})
});

router.get('/:id', (req, res) => {
  dbUser.getById(req.params.id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: 'There was an error retrieving this user...'
    })
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  dbUser.getUserPosts(req.params.id)
  .then(userPosts => {
    res.status(200).json(userPosts);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: 'There was an error retrieving this user\'s posts...'
    })
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  dbUser.remove(req.params.id)
  .then(deleted => {
    res.status(200).json(deleted);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: 'There was an error deleting this user...'
    })
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
  const changes = req.body;
  dbUser.update(req.params.id, changes)
  .then(updated => {
    res.status(200).json(updated);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: 'There was an error updating this user...'
    })
  })
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
