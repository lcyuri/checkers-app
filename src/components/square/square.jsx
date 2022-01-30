import React from 'react';
import './square.css'

function Square({ children, isBlack }) {
  const color = isBlack ? 'black' : 'white';

  return (
    <div className={`${color} board-square`}>
      {children}
    </div>
  );
}

export default Square;