/**
 * (C) 2017, Nurimansyah Rifwan.
 */
(() => {
  'use strict';

  // Require Express
  const express = require('express');

  // Module Export
  module.exports = (app) => {
    // Init Config
    app.locals.configs = {
      hosts: require('./configs/host'),
      database: require('./configs/database')
    };

    // Set Public Folders
    app.use(express.static('public'));

    // Set View Folders
    app.set('views', 'views');

    // Set View Engine
    app.set('view engine', 'ejs');

    // Return
    return app;
  };
})();
