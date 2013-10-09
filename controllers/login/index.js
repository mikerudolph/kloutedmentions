/*jshint browser:false, node:true*/

'use strict';

/**
 * Dependencies
 */
var auth = require('../../lib/auth');

module.exports = function(app) {
  app.get('/auth/twitter', auth.authenticate('twitter'));

  app.get('/auth/return', auth.authenticate('twitter', {
    successRedirect: '/',
    failRedirect: '/auth/failed'
  }));

  app.get('/auth/failed', function(req, res) {
    res.send('200', { message: 'Failed to authenticate with Twitter' });
  });
};
