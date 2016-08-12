/* eslint-env node */
var Backbone = require('backbone');

var CheckCollection = Backbone.Collection.extend(
    {
      url: '/api/checks/'
    }  
);

var checks = new CheckCollection();

var CheckModel = Backbone.Model.extend(
    {
      collection: checks
    }
);

module.exports = {
    model: CheckModel,
    collection: checks,
};