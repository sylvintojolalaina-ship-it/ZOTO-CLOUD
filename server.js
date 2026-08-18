require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/auth.html", (req, res) => {
    res.sendFile(path.join(__dirname, "auth.html"));
});

module.exports = app;