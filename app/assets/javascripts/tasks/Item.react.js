var React = require('react');

var Item = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    return this._buildCells();
  },

  _buildCells: function() {
    if (this.state.isEditing) {
      return (
        <tr>
          <td><input ref="name" type="text" defaultValue={this.props.data.name} /></td>
          <td><input ref="currentRate" type="text" defaultValue={this.props.data.current_rate} /></td>
          <td><input ref="start" type="text" defaultValue={this.props.data.start} /></td>
          <td><input ref="stop" type="text" defaultValue={this.props.data.stop} /></td>
          <td>
            <button onClick={this._handleSave}>Save</button>
            <button>Remove</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.current_rate}</td>
          <td>{this.props.data.start}</td>
          <td>{this.props.data.stop}</td>
          <td>
            <button onClick={this._handleEdit}>Edit</button>
            <button onClick={this._handleRemove}>Remove</button>
          </td>
        </tr>
      );
    }
  },

  _handleEdit: function(event) {
    event.preventDefault();
    this.setState({ isEditing: true })
  },

  _handleRemove: function(event) {
    event.preventDefault();
    this.props.removeTask(this.props.data.id);
  },

  _handleSave: function(event) {
    event.preventDefault();
    var data = {
      id: this.props.data.id,
      name: this.refs.name.getDOMNode().value.trim(),
      current_rate: this.refs.currentRate.getDOMNode().value.trim(),
      start: this.refs.start.getDOMNode().value.trim(),
      stop: this.refs.stop.getDOMNode().value.trim()
    };
    this.props.updateTask(data);
  }
});

module.exports = Item;
