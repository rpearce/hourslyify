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
        <List items={this.state.items} updateTask={this._updateTask} removeTask={this._removeTask} />
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
      .end(this._handleChange);
  },

  _updateTask: function(data) {
    request
      .patch('/tasks/' + data.id)
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleChange);
  },

  _removeTask: function(id) {
    request
      .del('/tasks/' + id)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleChange);
  },

  _handleFetch: function(err, res) {
    if (err) { console.log(err.response); return; }
    this.setState({ items: res.body });
  },

  _handleChange: function(err, res) {
    if (err) { console.log(err.response); return; }
    this._fetchTasks();
  }
});

module.exports = Container;
