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
<% if (hasRactive) { %>
  this.hasRactive = true;
<% } %>
  //
  this.attach(template);
<% if (hasRactive) { %>
  // each ractive related thing MUST go after attach()
  setInterval(function() {
    this.ractive.set('ts', (new Date()).getTime());
  }.bind(this), Math.floor(Math.random() * 1000));
<% } %>
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

