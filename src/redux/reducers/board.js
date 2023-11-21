const initialState = [];


export const boardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_BOARD": {
			const newBoard = {
				id: Date.now() + "",
				title: action.payload,
				lists: [],
				tasks: [],
			};

			return [...state, newBoard];
		}

		case "CHANGE_BOARD_NAME": {
			return state.map((board) => {
				if (board.id === action.payload.id) {
					return { ...board, title: action.payload.title };
				}

				return board;
			});
		}

		case "REMOVE_BOARD": {
			return state.filter((board) => board.id !== action.payload);
		}

		case "ADD_LIST_ID_TO_BOARD": {
			return state.map((board) => {
				if (board.id === action.payload.id) {
					return {
						...board,
						lists: [...board.lists, action.payload.listId],
					};
				}

				return board;
			});
		}

		case "REMOVE_LIST_ID_FROM_BOARD": {
			return state.map((board) => {
				if (board.id === action.payload.id) {
					return {
						...board,
						lists: board.lists.filter(
							(listId) => listId !== action.payload.listId,
						),
					};
				}

				return board;
			});
		}

		case "ADD_TASK_ID_TO_BOARD": {
			return state.map((board) => {
				if (board.id === action.payload.id) {
					return {
						...board,
						tasks: [...board.tasks, action.payload.taskId],
					};
				}

				return board;
			});
		}

		case "REMOVE_TASK_ID_FROM_BOARD": {
			return state.map((board) => {
				if (board.id === action.payload.id) {
					return {
						...board,
						tasks: board.tasks.filter(
							(taskId) => taskId !== action.payload.taskId,
						),
					};
				}

				return state;
			});
		}

		default: {
			return state;
		}
	}
};
export default boardReducer;
