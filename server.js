/**
 * (C) 2017, Nurimansyah Rifwan.
 */
(() => {
  'use strict';

  // Require Node Modules
  const express = require('express');
  let app = express();

  // Load Config
  app = require('./app/config')(app);

  // Load Libraries
  app = require('./app/libraries')(app);

  // Load Controllers
  app = require('./app/controllers')(app);

  // Load Models
  app = require('./app/models')(app);

  // Start the Server
  app.listen(app.locals.configs.hosts.port, app.locals.configs.hosts.host, () => {
    console.log(`Webserver start on port "${app.locals.configs.hosts.port}" at "http://${app.locals.configs.hosts.host}"`);
  });
})();
