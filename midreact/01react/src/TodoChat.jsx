import React, { useState } from 'react';

function TodoChat() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputTodo.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        todoName: inputTodo,
        status: false
      };
      setTodos([...todos, newTodo]);
      setInputTodo('');
    }
  };

  const handleEdit = (id, todoName) => {
    setEditingTodoId(id);
    setInputTodo(todoName);
  };

  const handleSave = (id, editedTodoName) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, todoName: editedTodoName } : todo
    );
    setTodos(updatedTodos);
    setEditingTodoId(null);
  };

  const handleStatusChange = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Todo Task</th>
            <th>Status</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={inputTodo}
                    onChange={(e) => setInputTodo(e.target.value)}
                  />
                ) : (
                  todo.todoName
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => handleStatusChange(todo.id)}
                />
              </td>
              <td>
                {editingTodoId === todo.id ? (
                  <button onClick={() => handleSave(todo.id, inputTodo)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(todo.id, todo.todoName)}>Edit</button>
                )}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoChat;
