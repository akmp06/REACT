// // actions.js
// export const createBoard = (title) => ({
//     type: 'CREATE_BOARD',
//     payload: title,
//   });
  
//   export const changeBoardName = (id, title) => ({
//     type: 'CHANGE_BOARD_NAME',
//     payload: { id, title },
//   });
  
//   export const removeBoard = (id) => ({
//     type: 'REMOVE_BOARD',
//     payload: id,
//   });
  
//   export const addListIdToBoard = (boardId, listId) => ({
//     type: 'ADD_LIST_ID_TO_BOARD',
//     payload: { id: boardId, listId },
//   });
  
//   export const removeListIdFromBoard = (boardId, listId) => ({
//     type: 'REMOVE_LIST_ID_FROM_BOARD',
//     payload: { id: boardId, listId },
//   });
  
//   export const addTaskIdToBoard = (boardId, taskId) => ({
//     type: 'ADD_TASK_ID_TO_BOARD',
//     payload: { id: boardId, taskId },
//   });
  
//   export const removeTaskIdFromBoard = (boardId, taskId) => ({
//     type: 'REMOVE_TASK_ID_FROM_BOARD',
//     payload: { id: boardId, taskId },
//   });
  
//   export const createList = (id, title, boardId) => ({
//     type: 'CREATE_LIST',
//     payload: { id, title, boardId },
//   });
  
//   export const changeListName = (id, title) => ({
//     type: 'CHANGE_LIST_NAME',
//     payload: { id, title },
//   });
  
//   export const removeList = (id) => ({
//     type: 'REMOVE_LIST',
//     payload: id,
//   });
  
//   export const changeBoardIdOfList = (id, boardId) => ({
//     type: 'CHANGE_BOARD_ID_OF_LIST',
//     payload: { id, boardId },
//   });
  
//   export const addTaskIdToList = (listId, taskId) => ({
//     type: 'ADD_TASK_ID_TO_LIST',
//     payload: { id: listId, taskId },
//   });
  
//   export const removeTaskIdFromList = (listId, taskId) => ({
//     type: 'REMOVE_TASK_ID_FROM_LIST',
//     payload: { id: listId, taskId },
//   });
  
//   export const sortTaskIdsInList = (draggableId, source, destination) => ({
//     type: 'SORT_TASK_IDS_IN_LIST',
//     payload: { draggableId, source, destination },
//   });
  
//   export const createTask = (id, title, boardId, listId) => ({
//     type: 'CREATE_TASK',
//     payload: { id, title, boardId, listId },
//   });
  
//   export const removeTask = (id) => ({
//     type: 'REMOVE_TASK',
//     payload: id,
//   });
  
//   export const changeTaskName = (id, title) => ({
//     type: 'CHANGE_TASK_NAME',
//     payload: { id, title },
//   });
  
//   export const changeListIdOfTask = (id, listId) => ({
//     type: 'CHANGE_LIST_ID_OF_TASK',
//     payload: { id, listId },
//   });
  
//   export const changeBoardIdOfTask = (id, boardId) => ({
//     type: 'CHANGE_BOARD_ID_OF_TASK',
//     payload: { id, boardId },
//   });
  
// src/redux/actions.js

// Action types for board
export const CREATE_BOARD = 'CREATE_BOARD';
export const CHANGE_BOARD_NAME = 'CHANGE_BOARD_NAME';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const ADD_LIST_ID_TO_BOARD = 'ADD_LIST_ID_TO_BOARD';
export const REMOVE_LIST_ID_FROM_BOARD = 'REMOVE_LIST_ID_FROM_BOARD';
export const ADD_TASK_ID_TO_BOARD = 'ADD_TASK_ID_TO_BOARD';
export const REMOVE_TASK_ID_FROM_BOARD = 'REMOVE_TASK_ID_FROM_BOARD';

// Action types for list
export const CREATE_LIST = 'CREATE_LIST';
export const CHANGE_LIST_NAME = 'CHANGE_LIST_NAME';
export const REMOVE_LIST = 'REMOVE_LIST';
export const CHANGE_BOARD_ID_OF_LIST = 'CHANGE_BOARD_ID_OF_LIST';
export const ADD_TASK_ID_TO_LIST = 'ADD_TASK_ID_TO_LIST';
export const REMOVE_TASK_ID_FROM_LIST = 'REMOVE_TASK_ID_FROM_LIST';
export const SORT_TASK_IDS_IN_LIST = 'SORT_TASK_IDS_IN_LIST';

// Action types for task
export const CREATE_TASK = 'CREATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_LIST_ID_OF_TASK = 'CHANGE_LIST_ID_OF_TASK';
export const CHANGE_BOARD_ID_OF_TASK = 'CHANGE_BOARD_ID_OF_TASK';

export const MOVE_TASK= 'MOVE_TASK';
// Action creators for board
export const createBoard = (title) => ({
  type: CREATE_BOARD,
  payload: title,
});

export const changeBoardName = (id, title) => ({
  type: CHANGE_BOARD_NAME,
  payload: { id, title },
});

export const removeBoard = (id) => ({
  type: REMOVE_BOARD,
  payload: id,
});

export const addListIdToBoard = (id, listId) => ({
  type: ADD_LIST_ID_TO_BOARD,
  payload: { id, listId },
});

export const removeListIdFromBoard = (id, listId) => ({
  type: REMOVE_LIST_ID_FROM_BOARD,
  payload: { id, listId },
});

export const addTaskIdToBoard = (id, taskId) => ({
  type: ADD_TASK_ID_TO_BOARD,
  payload: { id, taskId },
});

export const removeTaskIdFromBoard = (id, taskId) => ({
  type: REMOVE_TASK_ID_FROM_BOARD,
  payload: { id, taskId },
});

// Action creators for list
export const createList = (id, title, boardId) => ({
  type: CREATE_LIST,
  payload: { id, title, boardId },
});

export const changeListName = (id, title) => ({
  type: CHANGE_LIST_NAME,
  payload: { id, title },
});

export const removeList = (id) => ({
  type: REMOVE_LIST,
  payload: id,
});

export const changeBoardIdOfList = (id, boardId) => ({
  type: CHANGE_BOARD_ID_OF_LIST,
  payload: { id, boardId },
});

export const addTaskIdToList = (id, taskId) => ({
  type: ADD_TASK_ID_TO_LIST,
  payload: { id, taskId },
});

export const removeTaskIdFromList = (id, taskId) => ({
  type: REMOVE_TASK_ID_FROM_LIST,
  payload: { id, taskId },
});

export const sortTaskIdsInList = (draggableId, source, destination) => ({
  type: SORT_TASK_IDS_IN_LIST,
  payload: { draggableId, source, destination },
});

// Action creators for task
export const createTask = (id, title, boardId, listId) => ({
  type: CREATE_TASK,
  payload: { id, title, boardId, listId },
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const changeTaskName = (id, title) => ({
  type: CHANGE_TASK_NAME,
  payload: { id, title },
});

export const changeListIdOfTask = (id, listId) => ({
  type: CHANGE_LIST_ID_OF_TASK,
  payload: { id, listId },
});

export const changeBoardIdOfTask = (id, boardId) => ({
  type: CHANGE_BOARD_ID_OF_TASK,
  payload: { id, boardId },
});
export const moveTask = (taskId, sourceListId, destinationListId) => ({
  type: MOVE_TASK,
  payload: {
    taskId,
    sourceListId,
    destinationListId,
  },
});