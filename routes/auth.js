const router = require("express").Router();
const passport = require("passport");
const debug = require("debug")("passport_auth_manual:auth");

const strategyName = "meetup";
const scopes = ["ageless", "basic", "rsvp", "group_join"];
const redirectOptions = {
  successRedirect: "/users",
  failureRedirect: "/error"
};

router.route("/meetup").get(passport.authenticate(strategyName, { scope: scopes }));
router.route("/meetup/callback").get(passport.authenticate(strategyName, redirectOptions));

module.exports = router;
