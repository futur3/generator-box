/**
 * <%= boxName %> box
 */

var Box  = require('../box').Box;
var util = require('util');

var template = require('./views/template.jade');

module.exports = <%= _.capitalize(boxName) %>Box;

/**
 * Box definition
 */

function <%= _.capitalize(boxName) %>Box(params, brand) {
  Box.call(this, params);
  //
  this.attach(template);
  <% if (hasBrand) { %>
  this.applyBrand(brand);
  <% } %>
  this.emit('loaded');
}

util.inherits(<%= _.capitalize(boxName) %>Box, Box);

<% if (hasBrand) { %>
<%= _.capitalize(boxName) %>Box.prototype.applyBrand = function(data) {
  // personalizzo header
  this.$.find('.box-head')
    .css('background-color', data.header.color);
  this.$.find('#app')
    .attr('src', data.app.img.src);
}
<% } %>

