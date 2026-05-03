const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// DEBUG (VERY IMPORTANT)
console.log("PORT:", process.env.PORT);
console.log("API_KEY:", process.env.API_KEY);

// ROUTE
app.get("/api/movies", async (req, res) => {
  const search = req.query.search;

  if (!search) {
    return res.status(400).json({ error: "Search required" });
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}`
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ FORCE PORT (THIS FIXES YOUR ISSUE)
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});