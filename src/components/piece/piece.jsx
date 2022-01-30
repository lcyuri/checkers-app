import React from 'react';
import './piece.css';
import { useDrag } from 'react-dnd';

function Piece({piece, position}) {
  const pieceImg = require(`../../assets/${piece}.png`);

  const [ , drag] = useDrag({
    type: 'piece',
    item: () => ({
      id: piece,
      oldPosition: position
    })
  });

  return (
    <div className="piece-container" ref={drag}>
      <img src={pieceImg} alt="" className="piece"></img>
    </div>
  );
}

export default Piece;