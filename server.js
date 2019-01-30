const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const shoeRouter = require("./config/routes/shoe-route");

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// HTML endpoints
// app.get("/", (req, res) => res.send("hello world"));

// API endpoints
app.use("/api/shoe", shoeRouter);

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
