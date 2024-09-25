import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      console.log(newTodo);
      setTodo([...todo, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        className="border border-x-8 border-y-4 rounded"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="bg-teal-400 rounded-lg" onClick={addTodo}>
        Add Todo
      </button>
      <button
        className="bg-teal-400 rounded-lg"
        onClick={() => {
          deleteTodo(todo.length - 1);
        }}
      >
        Delete
      </button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item} &nbsp;
            <button
              className="bg-red-400 rounded-lg"
              onClick={() => deleteTodo(index)} // delete the todo at the specified index
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
