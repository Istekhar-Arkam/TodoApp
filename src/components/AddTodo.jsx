import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="flex justify-center h-12 max-w-2xl mt-12 space-x-2"
    >
      <input
        type="text"
        className="w-full h-12 px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-700 rounded shadow-lg outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="h-12 px-3 py-1 text-xs font-semibold text-white bg-indigo-500 border-0 rounded shadow-lg sm:w-36 focus:outline-none hover:bg-indigo-600 sm:text-sm sm:px-2"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
