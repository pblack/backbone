/* eslint-env node */
var Backbone = require('backbone');

var BatchModel = Backbone.Collection.extend(
    {
        url: '/api/batches/'
    }
);
module.exports = BatchModel;