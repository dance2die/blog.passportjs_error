const router = require("express").Router();

// Kick user out of "/users" if not authenticated
router.use("/", function(req, res, next) {
  if (!req.user) {
    res.redirect("/");
  }
  next();
});

router.get("/", function(req, res, next) {
  res.render("users", { user: req.user });
});

module.exports = router;
