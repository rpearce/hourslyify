var React = require('react');

var Form = React.createClass({
  componentWillUpdate: function() {
    this._clearInputs();
  },

  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref="name" id="name" />
        </div>
        <div>
          <label htmlFor="current_rate">Current Rate:</label>
          <input ref="currentRate" id="current_rate" />
        </div>
        <div>
          <label htmlFor="start">Start DateTime:</label>
          <input ref="start" id="start" />
        </div>
        <div>
          <label htmlFor="stop">Stop DateTime:</label>
          <input ref="stop" id="stop" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      name: this.refs.name.getDOMNode().value.trim(),
      current_rate: this.refs.currentRate.getDOMNode().value.trim(),
      start: this.refs.start.getDOMNode().value.trim(),
      stop: this.refs.stop.getDOMNode().value.trim()
    };

    this.props.createTask(data);
  },

  _clearInputs: function() {
    var self = this;
    ['name', 'currentRate', 'start', 'stop'].forEach(function(item) {
      self.refs[item].getDOMNode().value = '';
    });
  }
});

module.exports = Form;
