const express = require("express");
let cors = require("cors");
const data = require("./data");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Awesome Users API!");
});

app.get("/users/get", async (req, res) => {
  const users = data.Users;

  res.status(200).send(users);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
