import React, { useEffect, useState }from 'react';
import './board.css'
import EventEmitter from '../../utils/EventEmitter';
import { checkLegalMovement } from '../../utils/utils'
import BoardSquare from '../board-square/board-square';

function Board({ currentBoard }) {
  const getXPosition = (index) => {
    const x = index % 8;
    return x;
  };

  const getYPosition = (index) => {
    const y = Math.abs(Math.floor(index / 8) - 7);
    return y;
  };

  const isBlack = (index) => {
    const x = getXPosition(index);
    const y = getYPosition(index);
    return (x + y) % 2 === 1;
  };

  return (
    <div className="board">
        {currentBoard.flat().map((item, index) => (
          <div key={index} className="square">
            <BoardSquare 
              piece={item}
              position={index}
              isBlack={isBlack(index)}
              currentBoard={currentBoard}
            />
          </div>
        ))}
    </div>
  );
}

export default Board;