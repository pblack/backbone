/* eslint-env node */
var Checks = require('./models/checks.js');
var Backbone = require('backbone')
var $ = require('jquery');

var CheckList = Backbone.View.extend({
  el: '#checkList',
  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
    this.collection.fetch();
    this.render();
  },

  render: function() {
    var $el = this.$el;
    this.collection.each(function(elm, idx, list) {
      $el.append("<h4>foo: " + elm.get('name') + "</h4/>");
    })
  }
});
var list = new CheckList({
  collection: Checks.collection
});