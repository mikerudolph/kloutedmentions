/*jshint browser:false, node:true*/

'use strict';

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send('200', {'status': 'OK!'});
  });
};
