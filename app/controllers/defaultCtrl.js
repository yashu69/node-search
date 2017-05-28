/**
 * (C) 2017, Nurimansyah Rifwan.
 */
(() => {
  'use strict';

  // Module Export
  module.exports = (req, res) => {

    var title = 'Data Barang';
    var data = [
      {
        id: 1,
        brand: 'Asus',
        category: 'Prosesor',
        name: 'ASUS XX-1',
        description: 'Lorem ipsum'
      },
      {
        id: 2,
        brand: 'Logitech',
        category: 'Prosesor',
        name: 'LOGITECH XX-1',
        description: 'Lorem ipsum'
      }
    ];

    res.render('view-root', {
      title: title,
      data: data
    });
  };
})();
