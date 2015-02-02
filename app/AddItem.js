var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {
      newItem: ''
    }
  },
  handleChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  handleSubmit: function(){
    this.props.add(this.state.newItem);
    this.setState({
      newItem: ''
    });
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.newItem} placeholder="New Item" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add Item</button>
      </div>
    )
  }
});

module.exports = AddItem;