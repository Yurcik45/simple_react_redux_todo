import clear from "../../images/clear.svg";
import "./Input.sass";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todo";
import { useState } from "react";

const Input = () => {
  const dispatch = useDispatch();
  const [input_value, set_input_value] = useState("");
  const input_text = (e) => {
    set_input_value(e.target.value);
  };
  const add_new_todo = () => {
    dispatch(addTodo(input_value));
    set_input_value("");
  };
  return (
    <div className="Input">
      <div className="input_text">Task :</div>
      <input
        type="text"
        className="input_main"
        value={input_value}
        onChange={input_text}
        placeholder="Let's create new todo"
      />
      <img
        src={clear}
        alt="clear"
        className="input_clear"
        onClick={() => set_input_value("")}
      />
      <button className="submit" onClick={add_new_todo}>
        Add
      </button>
    </div>
  );
};

export default Input;
