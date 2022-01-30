import React from 'react';
import './board-square.css';
import Square from '../square/square';
import Piece from '../piece/piece';
import { useDrop } from 'react-dnd';
import EventEmitter from '../../utils/EventEmitter';

function BoardSquare({ piece, isBlack, position }) {
  const [ , drop] = useDrop({
    accept: 'piece',
    drop: (item) => {
      EventEmitter.emit('move', {
        oldPosition: item.oldPosition,
        newPosition: position
      });
    }
  });

  return (
    <div className="board-square" ref={drop}>
      <Square isBlack={isBlack}>
        {piece && <Piece piece={piece} position={position}/>}
      </Square>
    </div>
  );
}

export default BoardSquare;