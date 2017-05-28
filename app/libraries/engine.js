/**
 * (C) 2017, Nurimansyah Rifwan.
 */
(() => {
  'use strict';

  // Require Modules
  const ejs = require('ejs');

  // Module Export
  module.exports = (path, data, cb) => {
    // EJS Options
    let options = {};

    ejs.renderFile(path, data, options, (err, content) => {
      if (err) return cb(err);
      return cb(null, content);
    });
  };
})();
