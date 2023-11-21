
import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
// import { BoardContext } from '../contexts/Board';

const BoardCreatingForm = ({ createBoard }) => {
  const [boardTitle, setBoardTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createBoard(boardTitle);
    setBoardTitle('');
  };

  return (
    <div className="align-center m-top-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
        <button type="submit">Create Board</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBoard: (boardTitle) =>
    dispatch({ type: 'CREATE_BOARD', payload: boardTitle }),
  // Add other action creators as needed
});

export default connect(null, mapDispatchToProps)(BoardCreatingForm);
