const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const UserControllers = require("../controllers/users.js");

// example routes
router.get("/register", UserControllers.renderSignUp);

router.post("/signup", wrapAsync(UserControllers.singUp));

router
  .route("/login")
  .get(UserControllers.renderLogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    UserControllers.Login
  );

router.get("/logout", UserControllers.logout);

module.exports = router;
