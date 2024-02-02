const Post = require('../models/posts');
const sequelize = require('../util/database');

exports.newPost = async (req, res, next) => {
    try {
        const imageUrl = req.body.imgURL;
        const description = req.body.desc;

        const data = await Post.create({imageUrl: imageUrl, description: description})
        res.status(201).json({newPostDetail: data})
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.getAllPosts = (req, res, next) => {
    Post.findAll()
    .then((data) => {
        res.status(200).json({allPostsDetails: data})
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}