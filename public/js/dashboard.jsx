import React from 'react';
import Board from './board.jsx';

var DashBoard = React.createClass({

  getInitialState: function() {
    return {
      boards: []
    }
  },

  createBoard: function() {
    var board =  {title: this.refs.name.value}
    var boards = this.state.boards
    boards.push(board)
    this.setState({boards : boards})
  },

  render: function() {
    return (
      <div>
          <input type='text' className='brdName' ref='name'></input>
          <button className='btn' onClick={this.createBoard}>
          Create Card
          </button>
          {
              this.state.boards.map((board, index) => {
                return <Board key={index} title={board.title}> </Board>
            })
          }
      </div>
    );
  }
});

module.exports = DashBoard;
