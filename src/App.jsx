import Header from "./Components/Header/Header";
import Todos from "./Components/Todos/Todos";
import Input from "./Components/Input/Input";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <div className="todo_container">
        <Header />
        <Todos />
        <Input />
      </div>
    </div>
  );
}

export default App;
