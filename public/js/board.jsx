import React from 'react';

var Board = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
});

module.exports=Board;
