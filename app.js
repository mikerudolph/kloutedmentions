#!/usr/local/bin/node

/* jshint browser:false, node:true*/

'use strict';

/**
 * Dependencies
 */
var ejsLocals = require('ejs-locals')
  , express = require('express')
  , config = require('./config')
  , fs = require('fs')
  , cli = require('cli-color')
  , path = require('path')
  , app = express()
  , passport = require('passport');

console.log(cli.bold('Klouted Mentions\n'));

/**
 * Middleware
 */
app.engine('ejs', ejsLocals);

app.set('view engine', 'ejs');
  console.log(cli.bold('Set view engine'));

app.use('/assets', express.static(path.join(__dirname, '../public')));
  console.log(cli.bold('Set static assets directory'));

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: config.session.secret }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done();
});

app.configure('development', function() {
  console.log(cli.bold('Setting environment to: ') +
              cli.yellowBright('Development'));

  app.set('port', config.port);
  app.use(express.logger('dev'));
});

app.configure('production', function() {
  console.log(cli.bold('Setting environment to: ') +
              cli.yellowBright('Production'));

  app.set('port', config.port);
});

fs.readdirSync(__dirname + '/controllers').forEach(function(name) {
  require('./controllers/' + name)(app);
});

app.listen(config.port, function() {
  console.log('\n');
  console.log(cli.cyanBright.underline('Klouted Mentions up and running!'));
  console.log('Navigate to http://' + config.host + ':' + config.port);
});
