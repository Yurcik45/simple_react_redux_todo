import back from "../../images/back.svg";
import clear from "../../images/clear.svg";
import remove from "../../images/remove.svg";
import edit from "../../images/edit.svg";
import ok from "../../images/ok.svg";
import "./Item.sass";
import { useState } from "react";

const Item = ({ id, text, completed, todo_save, todo_remove, todo_done }) => {
  const [input_status, set_input_status] = useState(false);
  const [input_value, set_input_value] = useState(text);
  const [todo_edit, set_todo_edit] = useState(false);
  const set_input = () => {
    set_input_status(!input_status);
    set_todo_edit(!todo_edit);
  };
  const input_text = (e) => {
    set_input_value(e.target.value);
  };
  return (
    <div className={completed ? "Item done_bg" : "Item normal_bg"}>
      <input
        type="text"
        disabled={!input_status}
        className="item_text"
        value={text}
        value={input_status ? input_value : text}
        onChange={input_text}
      />
      <div className="item_actions">
        {/* normal mode */}
        <img
          src={ok}
          alt="done"
          className={todo_edit ? "hide" : "item_action_img"}
          onClick={() => todo_done(id)}
        />
        <img
          src={remove}
          alt="remove"
          className={todo_edit ? "hide" : "item_action_img"}
          onClick={() => todo_remove(id)}
        />
        <img
          src={edit}
          alt="edit"
          className={todo_edit ? "hide" : "item_action_img"}
          onClick={set_input}
        />
        {/* edit mode */}
        <img
          src={back}
          alt="back"
          className={todo_edit ? "item_action_img" : "hide"}
          onClick={set_input}
        />
        <img
          src={ok}
          alt="ok"
          className={todo_edit ? "item_action_img" : "hide"}
          onClick={() => todo_save(id, input_value)}
        />
        <img
          src={clear}
          alt="clear"
          className={todo_edit ? "item_action_img" : "hide"}
          onClick={() => set_input_value("")}
        />
      </div>
    </div>
  );
};

export default Item;
