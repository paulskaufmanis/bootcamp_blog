require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const jwt = require("jsonwebtoken");

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

// Register new user
router.post("/", async (req, res) => {
  if (await UsersRepository.findUser(req.body.username)) {
    return console.log("User exists");
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let data = await UsersRepository.addUser({
      name: req.body.name,
      surname: req.body.surname,
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

// Login

//____________________________________________________________________________________________________

// router.post("/login", async (req, res) => {
//   const user = await UsersRepository.findUser(req.body.username);
//   if (!user) {
//     return res.status(400).send("Didn't find user");
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       res.send(user);
//       console.log(user, "Fine, passwords match!");
//     } else {
//       console.log("Wrong password");
//       res.send({ message: "Wrong password" });
//     }
//   } catch {
//     res.status(500).send("something wrong with login code");
//   }
// });

//____________________________________________________________________________________________________

// const verifyJWT = (req, res, next) => {
//   const token = req.headers["x-access-token"];

//   if (!token) {
//     res.send("Need a token!");
//   } else {
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//       if (err) {
//         res.json({ auth: false, message: "Failed to authenticate" });
//       } else {
//         req.id = decoded.id;
//         next();
//       }
//     });
//   }
// };

// router.get("/isUserAuth", verifyJWT, (req, res) => {
//   res.send("You are authentificated!!!!!!!");
// });

let refreshTokens = [];

router.post("/login", async (req, res) => {
  const user = await UsersRepository.findUser(req.body.username);
  if (!user) {
    return res.status(400).send("Didn't find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // res.send()
      console.log("Fine, passwords match!");

      const username = req.body.username;
      const xuser = { name: username };

      const accessToken = generateAccessToken(xuser);
      const refreshToken = jwt.sign(xuser, process.env.REFRESH_TOKEN_SECRET);

      refreshTokens.push();
      res.json({
        auth: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user,
      });
      console.log("This is user from data: ", user);
    } else {
      console.log("Wrong password");
      res.send("Wrong password");
    }
  } catch {
    res.status(500).send("something wrong with login code");
  }
});

router.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

//____________________________________________________________________________________________________

router.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1300s",
  });
}

router.delete("/:id", async (req, res) => {
  await UsersRepository.deleteUser(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
