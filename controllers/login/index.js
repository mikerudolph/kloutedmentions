/*jshint browser:false, node:true*/

'use strict';

/**
 * Dependencies
 */
var passport = require('passport');

module.exports = function(app) {
  app.get('/auth/twitter', function(req, res) {
    res.send('200', {'status': 'OK!'});
  });
};
