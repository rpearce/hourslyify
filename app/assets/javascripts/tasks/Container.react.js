var React = require('react');
var request = require('superagent');
var Form = require('./Form.react');
var List = require('./List.react');

var Container = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  componentWillMount: function() {
    this._fetchTasks();
  },

  render: function() {
    return (
      <div>
        <Form createTask={this._createTask} />
        <List items={this.state.items} />
      </div>
    );
  },

  _fetchTasks: function() {
    request
      .get('/tasks')
      .set('Accept', 'application/json')
      .end(this._handleFetch);
  },

  _createTask: function(data) {
    request
      .post('/tasks')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleCreate);
  },

  _handleFetch: function(err, res) {
    if (err) { console.log(err.response); return; }
    this.setState({ items: res.body });
  },

  _handleCreate: function(err, res) {
    if (err) { console.log(err.response); return; }
    this._fetchTasks();
  }
});

module.exports = Container;
