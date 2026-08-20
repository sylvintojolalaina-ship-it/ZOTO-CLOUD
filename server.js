require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();


// =====================================
// MIDDLEWARE
// =====================================

app.use(express.json());

app.use(express.static(__dirname));


// =====================================
// PAGE PRINCIPALE
// =====================================

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "index.html")
    );
});


// =====================================
// PAGE AUTH
// =====================================

app.get("/auth.html", (req, res) => {
    res.sendFile(
        path.join(__dirname, "auth.html")
    );
});


// =====================================
// PAGE ADMIN
// =====================================

app.get("/admin.html", (req, res) => {
    res.sendFile(
        path.join(__dirname, "admin.html")
    );
});


// =====================================
// CONFIGURATION SUPABASE
// =====================================

app.get("/api/config", (req, res) => {

    res.json({

        url: process.env.SUPABASE_URL,

        key: process.env.SUPABASE_PUBLISHABLE_KEY

    });

});


// =====================================
// SITEMAP GOOGLE
// =====================================

app.get("/sitemap.xml", (req, res) => {

    res.type("application/xml");

    res.sendFile(
        path.join(__dirname, "sitemap.xml")
    );

});


// =====================================
// MANIFEST PWA
// =====================================

app.get("/manifest.json", (req, res) => {

    res.type("application/json");

    res.sendFile(
        path.join(__dirname, "manifest.json")
    );

});


// =====================================
// SERVICE WORKER
// =====================================

app.get("/service-worker.js", (req, res) => {

    res.type("application/javascript");

    res.sendFile(
        path.join(__dirname, "service-worker.js")
    );

});


// =====================================
// SERVEUR
// =====================================

const PORT =
    process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(
        `ZOTO CLOUD mandeha ao amin'ny http://localhost:${PORT}`
    );

});


// =====================================
// EXPORT
// =====================================

module.exports = app;