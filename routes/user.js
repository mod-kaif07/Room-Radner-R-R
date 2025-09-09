const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// example routes
router.get("/register", (req, res) => {
  res.render("user/signup");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registerdUser = await User.register(newUser, password);
      // console.log(registerdUser);
      req.login(registerdUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome to Room Rander !! ");
        res.redirect("/listing");
      });
    } catch (err) {
      req.flash("error", "Username already exist ");
      res.redirect("/register");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("user/login");
});
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash(
      "success",
      `Welcome back, ${req.user.username} Continue exploring`
    );
    let redirecturl = res.locals.redirecturl || "/listing";
    res.redirect(redirecturl);
  }
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are loged out Sucessfully ");
    res.redirect("/");
  });
});

module.exports = router;
