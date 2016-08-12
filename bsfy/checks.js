/* eslint-env node */
var Checks = require('./models/checks.js');

require('../public/js/3p/backbone.handlebars.js')
require('handlebars-form-helpers').register(require("handlebars"));

var templates = require('../public/js/templates.js')['tmpl'];
var Backbone = require('backbone');
var $ = require('jquery');



var CheckList = Backbone.HandlebarsView.extend({
  el: '#checkList',
  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
  },
  template: templates.checkList,
}); 

var list = new CheckList({
  collection: Checks.collection
});

var CheckView = Backbone.HandlebarsView.extend({
  el: '#checkForm',
  initialize: function() {
    this.listenTo(this.model, 'sync change', this.render);
  },
  template: templates.check,
});

var checkView = new CheckView({model: new Checks.model()});
Checks.collection.fetch()
  .then(function() {
   checkView.model.set(Checks.collection.first());
})

var User = Backbone.Model.extend();

var AppView = Backbone.HandlebarsView.extend({
  template: '<h1>Hello</h1>{{view "HelloView" model=this}}'
});

var HelloView = Backbone.HandlebarsView.extend({
  template: 'Hello {{name}}'
});

// var app = new AppView({model: new User({name: 'Loïc'})});
var app = new HelloView({model: new User({name: "ljsdlfkj"})});
app.render().$el.appendTo('#app');
