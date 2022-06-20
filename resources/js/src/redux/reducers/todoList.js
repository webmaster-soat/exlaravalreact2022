import { ADD_TODO, DEL_TODO } from "../constants/constantTodo";

const defaultState = [];
const todoList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id } = action.payload;
            return [...state, id];
        }

        case DEL_TODO: {
            const { id } = action.payload;
            return [...state, id];
        }
        default:
            return state;
    }
};

export default todoList;
