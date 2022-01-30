function isEmptyPosition(board, position) {
  return board[position] === null;
};

function isRegularMovement(board, oldPosition, newPosition) {
  const offset = Math.abs(newPosition - oldPosition);

  if (isEmptyPosition(board, newPosition)) {
    if (offset === 7 || offset === 9) {
      return true;
    };
  };

  return false;
};

function isAttackMovement(board, oldPosition, newPosition) {
  const offset = newPosition - oldPosition
  const halfWay = offset / 2;
  const enemyPosition = newPosition - halfWay;

  if (Math.abs(offset) === 14 || Math.abs(offset) === 18) {
    if (!isEmptyPosition(board, enemyPosition) && 
      board[enemyPosition] !== board[oldPosition]) {
      return enemyPosition;
    };
  };
};

export function updateBoard(board, oldPosition, newPosition) {
  const enemyPosition = isAttackMovement(board, oldPosition, newPosition);
  if (enemyPosition) {
    board[newPosition] = board[oldPosition];
    board[enemyPosition] = null;
    board[oldPosition] = null;
  } else if(isRegularMovement(board, oldPosition, newPosition)) {
    board[newPosition] = board[oldPosition];
    board[oldPosition] = null
  };

  return board;
};

export function setBoard() {
  return ([
    'red', null, 'red', null, 'red', null, 'red', null,
    null, 'red', null, 'red', null, 'red', null, 'red',
    'red', null, 'red', null, 'red', null, 'red', null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, 'brown', null, 'brown', null, 'brown', null, 'brown',
    'brown', null, 'brown', null, 'brown', null, 'brown', null,
    null, 'brown', null, 'brown', null, 'brown', null, 'brown',
  ]);
};