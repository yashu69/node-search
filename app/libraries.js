/**
 * (C) 2017, Nurimansyah Rifwan.
 */
(() => {
  'use strict';

  // Module Export
  module.exports = (app) => {

    /**
     * List your libraries middleware here
     */

    // EJS Template Engine Middleware
    app.engine('ejs', require('./libraries/engine'));

    // Return
    return app;
  };
})();
