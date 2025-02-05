const express = require("express");
const app = express();

app.use(express.json());

// Endpoint 1: Greeting API
app.get("/greet", (req, res) => {
    const name = req.query.name || "Guest";
    res.json({ message: `Hello, ${name}!` });
});

// Endpoint 2: Sum API
app.post("/sum", (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return res.status(400).json({ error: "Invalid input. Provide two numbers." });
    }
    res.json({ sum: num1 + num2 });
});

module.exports = app; // Export for testing

// Start server if run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
