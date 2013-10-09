/*jshint node:true, browser:false*/

'use strict';

/**
 * @fileOverview
 *
 * Environment based config setup
 */

var config = function() {
  switch(process.env.NODE_ENV) {
    case 'production':
      return require('./production.json');

    default:
      return require('./local.json');
  }
};

module.exports = new config();
