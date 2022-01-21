import Item from "../Item/Item";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo, completeTodo } from "../../redux/actions/todo";
import "./Todos.sass";
import { useEffect, useState } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const [todo_list, set_todo_list] = useState([]);
  const state = useSelector((state) => state.todo);
  const todo_done = (id) => {
    dispatch(completeTodo(id));
  };
  const todo_remove = (id) => {
    dispatch(removeTodo(id));
  };
  const todo_edit = (text, id) => {};
  const todo_save = (id, text) => {
    dispatch(editTodo(id, text));
  };
  useEffect(() => {
    set_todo_list(state);
  }, [state]);
  return (
    <div className="Todos">
      {todo_list &&
        todo_list.map((todo) => {
          return (
            <Item
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              todo_edit={todo_edit}
              todo_save={todo_save}
              todo_done={todo_done}
              todo_remove={todo_remove}
            />
          );
        })}
    </div>
  );
};

export default Todos;
