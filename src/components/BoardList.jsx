
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BoardItem from './BoardItem';

const BoardList = ({ boards }) => {
  return (
    <div className="flex-wrap m-top-md d-flex justify-content-around">
      {boards.map((board) => (
        <Link key={board.id} to={`/boards/${board.id}`}>
          <BoardItem board={board} />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(BoardList);
