const express = require("express");
const app = express();
const port = 8081;
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/users", (req, res) => {
  res.send({
    id: 1,
    name: "John",
    age: 30,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
