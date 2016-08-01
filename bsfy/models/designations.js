/* eslint-env node */
var Backbone = require('backbone');

var DesignationModel = Backbone.Model.extend(
    {
        url: '/api/designations/'
    }
);
DesignationCollection = Backbone.Collection.extend({
  model: DesignationModel,
  url: '/api/designations/'
});

module.exports = {
    model: DesignationModel,
    collection: new DesignationCollection(),
};