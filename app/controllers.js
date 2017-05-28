/**
 * (C) 2017, Nurimansyah Rifwan.
 */
(() => {
  'use strict';

  // Module Export
  module.exports = (app) => {

    /**
     * Set your routes and controller here
     */

    // Default Controller
    app.get('/', require('./controllers/defaultCtrl'));

    // Return
    return app;
  };
})();
