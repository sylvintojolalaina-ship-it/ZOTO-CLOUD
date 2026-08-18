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

// Sitemap Google
app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.sendFile(path.join(__dirname, "sitemap.xml"));
});
// Manifest PWA
app.get("/manifest.json", (req, res) => {
    res.type("application/json");
    res.sendFile(path.join(__dirname, "manifest.json"));
});
// Service Worker PWA
app.get("/service-worker.js", (req, res) => {
    res.type("application/javascript");
    res.sendFile(path.join(__dirname, "service-worker.js"));
});

module.exports = app;