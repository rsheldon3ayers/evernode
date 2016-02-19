'use strict';

module.exports = {
  index (req, res) {
    res.render('category-index');
  },
  new (req, res) {
    res.render('category-new');
  },
  create (req, res) {
    res.send('create');
  }
}
