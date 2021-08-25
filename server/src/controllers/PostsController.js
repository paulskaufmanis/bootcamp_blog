const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const PostsRepository = require("../repositories/PostsRepository");
// const addMetaData = require("../utils/addMetaData");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.get("/", async (req, res) => {
  const data = await PostsRepository.getAllPosts();
  res.status(200).json(data);
  console.log("whiew, passed through authentication...");
});

router.get("/my-posts", authenticateToken, async (req, res) => {
  // console.log(req.user.name);
  // console.log(req.params.created_by);
  // console.log(req.user);
  // console.log(req.body);
  const data = await PostsRepository.getUserPosts(req.user.name);
  res.status(200).json(data);
  console.log("whiew, passed through authentication...");
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
