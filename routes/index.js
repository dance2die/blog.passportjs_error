const router = require("express").Router();

router.get("/", function(req, res, next) {
  res.render("index", { title: "Manaul Passport!" });
});

// https://stackoverflow.com/a/19132999/4035
router.get("/logout", function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/"); //Inside a callback… bulletproof!
  });
});

module.exports = router;
