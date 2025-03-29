require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000; // Backend port

app.use(cors()); // Allow frontend to call backend
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1";

app.post("/gemini", async (req, res) => {
    try {
        const response = await axios.post(
            `${API_URL}/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            req.body,
            { headers: { "Content-Type": "application/json" } }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
