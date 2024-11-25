const express = require("express");
const router = express.Router();
const EmployeeModel2 = require("../Models/Employee");

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const emp = new EmployeeModel2({ name, email, password });

    await emp.save();
    res.status(201).json({
      message: "User Created",
      success: true,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: err.message,
    });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }

    // Find the user in the database
    const user = await EmployeeModel2.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Compare passwords directly
    if (password !== user.password) {
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }

    res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
