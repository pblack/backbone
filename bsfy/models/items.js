/* eslint-env node */
var Backbone = require('backbone');

var ItemModel = Backbone.Model.extend(
    {
        url: '/api/items/'
    }
);
ItemCollection = Backbone.Collection.extend({
  model: ItemModel,
  url: '/api/items/'
});

module.exports = {
    model: ItemModel,
    collection: new ItemCollection(),      
};