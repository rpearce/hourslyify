var React = require('react');

var Item = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.current_rate}</td>
        <td>{this.props.data.start}</td>
        <td>{this.props.data.stop}</td>
      </tr>
    );
  }
});

module.exports = Item;
