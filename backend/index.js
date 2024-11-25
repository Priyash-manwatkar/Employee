const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const EmployeeRoutes = require("./Routes/EmployeeRoutes");
const Employee2Routes = require("./Routes/EmployeeController");
require("./Models/db");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use Employee Routes
app.use("/", Employee2Routes);
app.use("/api/employee", EmployeeRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Priyash" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
