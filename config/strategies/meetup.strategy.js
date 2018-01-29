const passport = require("passport");
const MeetupStrategy = require("passport-meetup");
const debug = require("debug")("passport_auth_manual:meetup.strategy");
require('dotenv').config({path: '.env'});

module.exports = function(app) {
  const meetupStrategyOptions = {
    consumerKey: process.env.MEETUP_API_CONSUMER_KEY,
    consumerSecret: process.env.MEETUP_API_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/meetup/callback"
  };

  function onAuthentication(token, tokenSecret, profile, done) {
    const {MEETUP_API_CONSUMER_KEY, MEETUP_API_CONSUMER_SECRET} = process.env;
    debug("====== keys ======", MEETUP_API_CONSUMER_KEY, MEETUP_API_CONSUMER_SECRET);
    // debug(`token => ${token}`);
    // debug(`tokenSecret => ${tokenSecret}`);
    // debug(`profile => ${profile}`);
    done(null, profile);
  }

  const meetupStrategy = new MeetupStrategy(
    meetupStrategyOptions,
    onAuthentication
  );

  passport.use(meetupStrategy);
};
