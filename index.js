const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        country: req.headers["x-vercel-ip-country"]||'',
        region: req.headers["x-vercel-ip-country-region"]||'',
        city: req.headers["x-vercel-ip-city"]||'',
        lat: req.headers["x-vercel-ip-latitude"]||'',
        lon: req.headers["x-vercel-ip-longitude"]||'',
        ip: req.headers["x-vercel-ip"]||'',
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
