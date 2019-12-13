const express = require("express");
const path = require("path");

const serverPath = path.join(__dirname, "/");

const PORT = 3000

const app = express();

app.use(express.static(serverPath));

app.listen(PORT);