import { ADD_TODO, EDIT_TODO, REMOVE_TODO, COMPLETE_TODO } from "../types";

const initialState = [
  {
    id: 0,
    text: "This is a todo",
    completed: false,
  },
];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          completed: false,
          text: action.payload.text,
        },
      ];
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
            }
          : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case COMPLETE_TODO:
      state.push(state.splice(action.payload.id, 1)[0]);
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    default:
      return state;
  }
};
