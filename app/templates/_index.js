/**
 * <%= boxName %> box
 */

var Box  = require('../box').Box;
var util = require('util');

var template = require('./views/template.jade');
var mapper = require('./views/mapper.jade');

module.exports = <%= boxName %>Box;

/**
 * Box definition
 */

function <%= boxName %>Box(params, brand) {
  Box.call(this, params);
  //
  this.attach(template);
  this.applyBrand(brand);
  this.emit('loaded');
}

util.inherits(<%= boxName %>Box, Box);

<%= boxName %>Box.prototype.applyBrand = function(data) {
  // personalizzo header
  this.$.find('.box-head')
    .css('background-color', data.header.color);
  this.$.find('#app')
    .attr('src', data.app.img.src);
}


