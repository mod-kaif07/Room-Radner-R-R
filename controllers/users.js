const User = require("../models/user.js");

module.exports.renderSignUp = (req, res) => {
  res.render("user/signup");
};

module.exports.singUp = async (req, res) => {
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
};

module.exports.renderLogin = (req, res) => {
  res.render("user/login");
};

module.exports.Login = async (req, res) => {
  req.flash("success", `Welcome back, ${req.user.username} Continue exploring`);
  let redirecturl = res.locals.redirecturl || "/listing";
  res.redirect(redirecturl);
};

module.exports.logout=(req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are loged out Sucessfully ");
    res.redirect("/");
  });
}
