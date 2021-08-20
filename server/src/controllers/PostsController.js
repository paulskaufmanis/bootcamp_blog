const express = require("express");

const router = express.Router();

const PostsRepository = require("../repositories/PostsRepository");
// const addMetaData = require("../utils/addMetaData");

router.get("/", async (req, res) => {
  const data = await PostsRepository.getAllPosts();
  res.status(200).json(data);
});

router.get("/:id", async (req, res) => {
  const data = await PostsRepository.getSinglePost(req.params.id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      error: "incorrect id",
    });
  }
});

router.delete("/:id", async (req, res) => {
  await PostsRepository.deletePost(req.params.id);
  res.sendStatus(204);
});

router.post("/", async (req, res) => {
  const data = await PostsRepository.addPost(req.body);
  if (data) {
    res.status(201).json(data);
  } else {
    res.status(401).json({
      error: "bad request",
    });
  }
});

module.exports = router;
