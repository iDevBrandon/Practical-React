import TodoContainer from "./components/TodoContainer";
import TodoControl from "./components/TodoControl";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoContainer>
      <TodoControl />
      <TodoList />
    </TodoContainer>
  );
}

export default App;
