import React, { Component } from 'react';
import Board from './components/board/board';
import './App.css';
import { setBoard, updateBoard } from './utils/utils';
import EventEmitter from './utils/EventEmitter';
class App extends Component { 
  constructor(props){ 
    super(props) 

    this.state = {
      board: setBoard(),
      gameOver: false 
    }
  } 

  componentDidMount() {
    EventEmitter.addListener('move', this.onMove.bind(this));
  }

  onMove(event) {
    const newBoard = updateBoard(this.state.board, event.oldPosition, event.newPosition);
    if (Object.values(newBoard).includes('red') === -1 ||
        Object.values(newBoard).includes('brown') === -1) {
      this.gameOver = true;
    } 
    this.setState({ board: newBoard })
  }

  render(){ 
    return (
      <div className="container">
        <div className="board-container">
          <Board currentBoard={this.state.board}/>
        </div>
        <div className="game-over">
          {this.state.gameOver && <p>Game Over. Please, refresh the page to start it again.</p>}
        </div>
      </div>
    );
  } 
}

export default App;
