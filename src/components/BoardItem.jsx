
import React from 'react';
import { connect } from 'react-redux';
import { icons } from '../assets';

const BoardItem = ({ board, removeBoard }) => {
  const removeHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    removeBoard(board.id);
    board.lists.forEach((listId) => {
      // Dispatch actions related to removing lists
    });
    board.tasks.forEach((taskId) => {
      // Dispatch actions related to removing tasks
    });
  };

  return (
    <div className="board-box d-flex flex-direction-column">
      <div className="d-flex justify-content-between">
        <h5>{board.title}</h5>
        <img
          onClick={removeHandler}
          src={icons.crossIcon}
          alt=""
          className="add-item-icon"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeBoard: (boardId) => dispatch({ type: 'REMOVE_BOARD', payload: boardId }),
  // Add other action creators as needed
});

export default connect(null, mapDispatchToProps)(BoardItem);
