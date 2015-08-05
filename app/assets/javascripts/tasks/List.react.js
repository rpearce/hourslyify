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
        </tr>
        {this._buildItems()}
      </table>
    );
  },

  _buildItems: function() {
    return this.props.items.map(function(item) {
      return <Item data={item} key={item.name} />
    });
  }
});

module.exports = List;
