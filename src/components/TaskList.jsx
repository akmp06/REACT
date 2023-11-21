// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { icons } from '../assets';
import AddItem from './AddItem';
import AddItemForm from './AddItemForm';
import TaskCard from './TaskCard';

import {
  createTask,
  removeTask,
  addTaskIdToList,
  removeList,
  removeListIdFromBoard,
} from '../redux/action/actions';

const TaskList = ({
  taskList,
  tasks,
  createTask,
  removeTask,
  addTaskIdToList,
  removeList,
  removeListIdFromBoard,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const taskId = Date.now() + '';
    createTask({
      id: taskId,
      title: taskTitle,
      listId: taskList.id,
      boardId: taskList.boardId,
    });

    addTaskIdToList({
      listId: taskList.id,
      taskId: taskId,
    });

    setEditMode(false);
    setTaskTitle('');
  };

  const removeHandler = () => {
    removeList(taskList.id);

    taskList.tasks.forEach((taskId) => {
      removeTask(taskId);
    });

    removeListIdFromBoard({
      boardId: taskList.boardId,
      listId: taskList.id,
    });
  };

  return (
    <Droppable droppableId={taskList.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          className="list-container"
          ref={provided.innerRef}
        >
          <div className="list-title-container">
            <h5>{taskList.title}</h5>
            <img
              onClick={removeHandler}
              src={icons.crossIcon}
              alt=""
              className="add-item-icon"
            />
          </div>
          {taskList.tasks.map((taskId, index) => (
            <TaskCard key={taskId} taskId={taskId} index={index} />
          ))}
          {provided.placeholder}
          {!editMode ? (
            <AddItem setEditMode={setEditMode} />
          ) : (
            <AddItemForm
              title={taskTitle}
              onChangeHandler={(e) => {
                setTaskTitle(e.target.value);
              }}
              setEditMode={setEditMode}
              submitHandler={submitHandler}
            />
          )}
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)),
  removeTask: (taskId) => dispatch(removeTask(taskId)),
  addTaskIdToList: (payload) => dispatch(addTaskIdToList(payload)),
  removeList: (listId) => dispatch(removeList(listId)),
  removeListIdFromBoard: (payload) => dispatch(removeListIdFromBoard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
