const express = require("express");
const app = express();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// define routes
app.use("/api/contact", require("./routes/contact"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The Hire Wire API is running on port ${PORT}`);
});
