const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Email must contain @." });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters." });
  }

  // This lab validates input only. It does not authenticate a user.
  res.json({ message: "Validation successful. No real login was performed." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
