import { useState, useEffect } from 'react';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

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
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
