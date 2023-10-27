import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h1 className="text-2xl text-center mb-4 text-blue-600">Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        className="w-full p-2 rounded border border-gray-300 mb-2"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={addTodo}
      >
        Add
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-blue-100 p-2 rounded mb-2"
          >
            {todo}
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
