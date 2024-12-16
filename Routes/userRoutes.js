const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../Controllers/authController");

// User authentication routes
router.post("../../FrontEnd/src/components/LoginPage.tsx", loginUser);
router.post("../../FrontEnd/src/components/SignUpPage.tsx", registerUser); // For user registration

module.exports = router;
