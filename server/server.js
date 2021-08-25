const express = require("express");
const apiRouter = require("./src/routes/API");
const cors = require("cors");

const server = express();
server.use(express.json());

server.use(cors({ origin: "http://localhost:8080" }));

server.use("/api", apiRouter);

server.get("/posts", apiRouter);

server.post("/login", apiRouter);

server.use("/", function (req, res) {
  res.send("Hey, this is Bootcamp blog server");
});

const port = 3300;
// start server
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
