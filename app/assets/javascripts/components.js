var React = require('react');
var Tasks = require('./tasks/Container.react');

module.exports = function() {
  var tasksSelector = document.querySelector('[data-js="tasks"]');
  if (tasksSelector) {
    React.render(<Tasks />, tasksSelector);
  }
};
