
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import AddItemForm from './AddItemForm';
import { icons } from "../assets";


const TaskCard = ({ task, index, removeTask, changeTaskName }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    changeTaskName({ id: task.id, title: taskTitle });
    setEditMode(false);
  };

  const removeHandler = () => {
    removeTask(task.id);
    // Dispatch actions related to removing the task from lists and boards
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {!editMode ? (
              <div onClick={() => setEditMode(true)} className="task-card">
                <p>{task.title}</p>
                <img
                  src={icons.crossIcon}
                  alt=""
                  className="add-item-icon"
                  onClick={removeHandler}
                />
              </div>
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
        );
      }}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId) => dispatch({ type: 'REMOVE_TASK', payload: taskId }),
  changeTaskName: ({ id, title }) =>
    dispatch({ type: 'CHANGE_TASK_NAME', payload: { id, title } }),
  // Add other action creators as needed
});

export default connect(null, mapDispatchToProps)(TaskCard);
