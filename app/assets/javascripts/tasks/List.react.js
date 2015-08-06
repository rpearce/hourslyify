var React = require('react');
var Item = require('./Item.react');

var List = React.createClass({
  render: function() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Rate</th>
          <th>Start</th>
          <th>Stop</th>
          <th></th>
        </tr>
        {this._buildItems()}
      </table>
    );
  },

  _buildItems: function() {
    return this.props.items.map(function(item) {
      return <Item data={item} updateTask={this.props.updateTask} removeTask={this.props.removeTask} key={item.name + item.id} />
    }.bind(this));
  }
});

module.exports = List;
