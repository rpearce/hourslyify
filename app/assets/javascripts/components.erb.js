<% if Rails.env.production? %>
  var React = require('react');
<% else %>
  var React = require('react/addons');
<% end %>

var Tasks = require('./tasks/Container.react');

module.exports = function() {
  var tasksSelector = document.querySelector('[data-js="tasks"]');
  if (tasksSelector) {
    React.render(<Tasks />, tasksSelector);
  }
};
