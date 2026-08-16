require("dotenv").config();

const express = require("express");
const path = require("path");
const supabase = require("./supabase");

const app = express();
const PORT = 3000;

// Mamaky ny fichiers ao amin'ny dossier ZOTO-CLOUD
app.use(express.static(path.join(__dirname)));

// Pejy fandraisana
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Fanamarinana tsotra fa mifandray amin'i Supabase
app.get("/api/test-supabase", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("test")
            .select("*")
            .limit(1);

        if (error) {
            return res.json({
                success: false,
                message: "Supabase mifandray, fa mbola tsy misy table test.",
                error: error.message
            });
        }

        res.json({
            success: true,
            message: "ZOTO CLOUD mifandray amin'i Supabase!",
            data: data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`ZOTO CLOUD mandeha ao amin'ny http://localhost:${PORT}`);
});