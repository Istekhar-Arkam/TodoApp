import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <center className="h-screen p-3 border-2 border-red-500 bg-gradient-to-r from-green-300 to-blue-300">
      <div className="flex items-center justify-center h-20 text-3xl font-bold capitalize rounded shadow-lg">
        Todo App
      </div>
      <AddTodo />
      <Todos />
    </center>
  );
}

export default App;
