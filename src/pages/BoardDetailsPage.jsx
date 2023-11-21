
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import BoardList from '../components/BoardList';
import TaskList from '../components/TaskList';
import AddItem from '../components/AddItem';
import AddItemForm from '../components/AddItemForm';
import { createList, addListIdToBoard, changeListIdOfTask, sortTaskIdsInList } from '../redux/action/actions';

const BoardDetails = () => {
  const { boardId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState('');

  const dispatch = useDispatch();

  const lists = useSelector(state => state.lists);

  const renderedList = lists.filter((item) => item.boardId === boardId);

  const submitHandler = (e) => {
    e.preventDefault();
    const listId = Date.now() + '';
	dispatch(createList(listId, listTitle, boardId));
    dispatch(addListIdToBoard(boardId, listId));
    // createList({ id: listId, title: listTitle, boardId: boardId });
    setEditMode(false);
    setListTitle('');
  };

  const dragHandler = (result) => {
    const { draggableId, source, destination } = result;
    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      // Moving task to a different list
      changeListIdOfTask(draggableId, source.droppableId, destination.droppableId);
    }
	// dispatchListAction({
	// 	type: 'SORT_TASK_IDS_IN_LIST',
	// 	payload: {
	// 	  listId: source.droppableId,
	// 	  startIndex: source.index,
	// 	  endIndex: destination.index,
	// 	},
	//   });

    // Handle the case when the task is moved within the same list
    // (You might need to add a separate action for this)
  };
  

  return (
    <DragDropContext onDragEnd={dragHandler}>
      <div className="d-flex m-top-sm flex-direction-row">
        <Link to="/">Back to Boards</Link>
        {renderedList.map((taskList) => (
          <TaskList key={taskList.id} taskList={taskList} />
        ))}
        {!editMode ? (
          <AddItem listAddItem={true} setEditMode={setEditMode} />
        ) : (
          <AddItemForm
            title={listTitle}
            listForm={true}
            onChangeHandler={(e) => {
              setListTitle(e.target.value);
            }}
            setEditMode={setEditMode}
            submitHandler={submitHandler}
          />
        )}
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
  lists: state.lists,
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  createList: ({ id, title, boardId }) =>
    dispatch({ type: 'CREATE_LIST', payload: { id, title, boardId } }),
  removeList: (listId) => dispatch({ type: 'REMOVE_LIST', payload: listId }),
  createTask: ({ id, title, listId, boardId }) =>
    dispatch({ type: 'CREATE_TASK', payload: { id, title, listId, boardId } }),
  removeTask: (taskId) => dispatch({ type: 'REMOVE_TASK', payload: taskId }),
  addTaskToBoard: ({ listId, boardId }) =>
    dispatch({ type: 'ADD_TASK_TO_BOARD', payload: { listId, boardId } }),
  changeListName: ({ id, title }) =>
    dispatch({ type: 'CHANGE_LIST_NAME', payload: { id, title } }),
  sortTaskIdsInList: (result) =>
    dispatch({
      type: 'SORT_TASK_IDS_IN_LIST',
      payload: {
        draggableId: result.draggableId,
        source: result.source,
        destination: result.destination,
      },
    }),
  // Add other action creators as needed
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails);
