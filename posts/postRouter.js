const express = require('express');
const dbPost = require('../posts/postDb.js')

const router = express.Router();

router.get('/', (req, res) => {
  dbPost.get()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'There was an error retreving the posts.'
      })
    })
});

router.get('/:id', (req, res) => {
  dbPost.getById(req.params.id)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'There was an error retrieving the post.'
      })
    })
});

router.delete('/:id', (req, res) => {
  dbPost.remove(req.params.id)
    .then(deleted => {
      res.status(200).json(deleted)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'There was an error deleting the post.'
      })
    })
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  dbPost.update(req.params.id, changes)
    .then(updated => {
      res.status(200).json(updated)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'There was an error updating the post.'
      })
    })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
