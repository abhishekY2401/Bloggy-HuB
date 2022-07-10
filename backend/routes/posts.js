const router = require("express").Router();
const Post = require("../models/Post");
const Categories = require("../models/Category");

// create a post
router.post("/post", async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo,
      username: req.body.username,
      categories: req.body.categories,
    });

    const post = await newPost.save().then((post) => {
      console.log(post);
      console.log("post saved to database");
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// search a post

module.exports = router;
