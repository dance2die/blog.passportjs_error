const passport = require("passport");
const MeetupStrategy = require("passport-meetup");
const debug = require("debug")("passport_auth_manual:meetup.strategy");
// Import Enviroment variables from ".env" file.
require('dotenv').config({path: '.env'});

module.exports = function(app) {
  const meetupStrategyOptions = {
    consumerKey: process.env.MEETUP_API_CONSUMER_KEY,
    consumerSecret: process.env.MEETUP_API_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/meetup/callback"
  };

  function onAuthentication(token, tokenSecret, profile, done) {
    done(null, profile);
  }

  const meetupStrategy = new MeetupStrategy(
    meetupStrategyOptions,
    onAuthentication
  );

  passport.use(meetupStrategy);
};
