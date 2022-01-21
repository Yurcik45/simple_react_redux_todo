import "./Header.sass";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const [todo_count, set_todo_count] = useState(0);
  const state = useSelector((state) => state.todo);
  useEffect(() => {
    const nonActive = state.filter((e) => e.completed === false).length;
    set_todo_count(nonActive);
  }, [state]);
  return <div className="Header">To do: {todo_count}</div>;
};

export default Header;
