import { ADD_TODO, DEL_TODO } from "../constants/constantTodo";

let nextTodoId = 0;

export const addTodo = function (content) {
    console.log(content);

    return {
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content,
        },
    };
};

export const delTodo = (id) => ({
    type: DEL_TODO,
    payload: { id },
});

// export const setFilter = (filter) => ({
//     type: SET_FILTER,
//     payload: { filter },
// });
