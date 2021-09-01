const express = require("express");
const router = express.Router();
const PostsCtlr = require("../controllers/PostsController");
const UsersCtlr = require("../controllers/UsersController");

// app. use(function(req, res, next) {
//   res. header("Access-Control-Allow-Origin", "*");

router.use("/posts-management/posts", PostsCtlr);
router.use("/users-management/users", UsersCtlr);

router.use("*", (req, res) => {
  res.status(404);
  res.json({
    error: "route not found",
  });
});

module.exports = router;
