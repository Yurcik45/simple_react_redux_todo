import { ADD_TODO, EDIT_TODO, REMOVE_TODO, COMPLETE_TODO } from "../types";

export const addTodo = (text) => (dispatch) =>
  dispatch({
    type: ADD_TODO,
    payload: { text },
  });

export const editTodo = (id, text) => (dispatch) => {
  dispatch({
    type: EDIT_TODO,
    payload: { id, text },
  });
};

export const removeTodo = (id, text) => (dispatch) =>
  dispatch({
    type: REMOVE_TODO,
    payload: { id },
  });

export const completeTodo = (id) => (dispatch) =>
  dispatch({
    type: COMPLETE_TODO,
    payload: { id },
  });
