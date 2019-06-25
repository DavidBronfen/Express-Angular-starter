const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;

app.get("/", ( req, res ) => {
  let filesList = [];

  fs.readdirSync("./data/").forEach(file => {
    filesList.push(file);
  });

  res.json(filesList);
});

app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});
