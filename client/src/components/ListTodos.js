import { useState, useEffect } from 'react';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Delete Todos Function
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get Todos Function
  const getTodos = async () => {
    const response = await fetch('http://localhost:5000/todos');

    const todosArray = await response.json();

    setTodos(todosArray);
  };

  // Grab data with useEffect
  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <>
      <table className='table mt-5'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;