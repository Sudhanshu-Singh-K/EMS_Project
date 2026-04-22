const express = require("express");
const router = express.Router();

const {
  register,
  login,
  updatePassword,
  updateCourse,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.put("/update-password", protect, updatePassword);
router.put("/update-course", protect, updateCourse);

module.exports = router;