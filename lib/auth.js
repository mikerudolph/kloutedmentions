/*jshint browser:false, node: true*/

'use strict';

/**
 * Dependencies
 */
var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy
  , config = require('../config');

module.exports = passport.use(new TwitterStrategy({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: config.url + config.twitter.callbackPath
},
function(token, tokenSecret, profile, done) {
  done(null, profile);
}));
