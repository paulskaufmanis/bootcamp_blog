const express = require("express");
const router = express.Router();
const PostsCtlr = require("../controllers/PostsController");
const UsersCtlr = require("../controllers/UsersController");

router.use("/posts-management/posts", PostsCtlr);
router.use("/users-management/users", UsersCtlr);

router.use("*", (req, res) => {
  res.status(404);
  res.json({
    error: "route not found",
  });
});

module.exports = router;
