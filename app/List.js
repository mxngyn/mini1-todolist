var React = require('react');

var List = React.createClass({
  render: function(){
    var listItems = this.props.items.map(function(item){
      return (
        <li> {item} </li>
      )
    });
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
});

module.exports = List;