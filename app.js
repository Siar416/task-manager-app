const express = require("express");
const app = express();

// routes
app.get("/hello", (req, res) => {
  res.send(`Task Manager App`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
