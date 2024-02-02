const express = require('express');

const router = express.Router();

const postController = require('../controller/posts');

router.post('/add-post', postController.newPost);
router.get('/get-post', postController.getAllPosts)

module.exports = router;