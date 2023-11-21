const initialState = [];

export const listReducer = (lists = initialState, action) => {
	switch (action.type) {
		case "CREATE_LIST": {
			const newList = {
				id: action.payload.id,
				title: action.payload.title,
				boardId: action.payload.boardId,
				tasks: [],
			};

			return [...lists, newList];
		}

		case "CHANGE_LIST_NAME": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return { ...list, title: action.payload.title };
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "REMOVE_LIST": {
			return lists.filter((list) => list.id !== action.payload);
		}

		case "CHANGE_BOARD_ID_OF_LIST": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return { ...list, boardId: action.payload.boardId };
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "ADD_TASK_ID_TO_LIST": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return {
						...list,
						tasks: [...list.tasks, action.payload.taskId],
					};
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "REMOVE_TASK_ID_FROM_LIST": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return {
						...list,
						tasks: list.tasks.filter(
							(taskId) => taskId !== action.payload.taskId,
						),
					};
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "SORT_TASK_IDS_IN_LIST": {
			const { draggableId, source, destination } = action.payload;
			return lists.map((list) => {
				if (
					list.id === source.droppableId &&
					source.droppableId === destination.droppableId
				) {
					// Create a copy of the tasks array

					const copyOfTasks = [...list.tasks];
					copyOfTasks.splice(source.index, 1);
					copyOfTasks.splice(destination.index, 0, draggableId);
					return { ...list, tasks: copyOfTasks };
				}

				if (list.id === source.droppableId) {
					return {
						...list,
						tasks: list.tasks.filter(
							(taskId) => taskId !== draggableId,
						),
					};
				}

				if (list.id === destination.droppableId) {
					// list.tasks.splice(destination.index, 0, draggableId);
					return {
						...list,
						tasks: [
							...list.tasks.slice(0, destination.index),
							draggableId,
							...list.tasks.slice(destination.index),
						],
					};
				}

				return list;
			});
		}

		default: {
			return lists;
		}
	}
};

export default listReducer;