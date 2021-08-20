const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const UsersRepository = require("../repositories/UsersRepository");
// const addMetaData = require("../utils/addMetaData");

router.get("/", async (req, res) => {
  const data = await UsersRepository.getAllUsers();
  res.status(200).json(data);
});

router.get("/:id", async (req, res) => {
  const data = await UsersRepository.getSingleUser(req.params.id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      error: "incorrect id",
    });
  }
});

// router.delete("/:id", async (req, res) => {
//   await UsersRepository.deleteUser(req.params.id);
//   res.sendStatus(204);
// });

router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let data = await UsersRepository.addUser({
      username: req.body.username,
      password: hashedPassword,
    });
    res.status(201).json(data);
  } catch {
    res.status(500).json({
      error: "bad request",
    });
  }
});

router.post("/login", async (req, res) => {
  const user = await UsersRepository.findUser(req.body.username);
  if (!user) {
    return res.status(400).send("Didn't find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success!");
    } else {
      res.send("Wrong password");
    }
  } catch {
    res.status(500).send("something");
  }
});

router.delete("/:id", async (req, res) => {
    await UsersRepository.deleteUser(req.params.id);
    res.sendStatus(204);
  });
  
  
module.exports = router;
