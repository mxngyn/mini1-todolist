var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var App = React.createClass({
  getInitialState: function(){
    return {
      list: ['one', 'two', 'three']
    }
  },
  handleAddItem: function(newItem){
    this.setState({
      list: this.state.list.concat([newItem])
    });
  },
  render: function(){
    return (
      <div>
        <AddItem add={this.handleAddItem}/>
        <List items={this.state.list}/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)