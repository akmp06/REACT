
import React from 'react';
import BoardCreatingForm from '../components/BoardCreatingForm';
import BoardList from '../components/BoardList';
import { connect } from 'react-redux';

const Boards = ({ boards }) => {
  return (
    <div>
      <BoardCreatingForm />
      <BoardList boards={boards} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(Boards);
