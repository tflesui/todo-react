const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const client = require('./db.js');
client.connect();

// middleware
app.use(cors());
app.use(express.json());  //allows access to req.body

app.use(express.static(path.join(__dirname, 'build')));

//ROUTES

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await client.query(`
      SELECT *
      FROM todo
      ORDER BY todo_id ASC
    `);

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//get single todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await client.query(`
      SELECT *
      FROM todo
      WHERE todo_id=($1)
    `,[id])

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

//create a todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;    

    const newTodo = await client.query(`
      INSERT INTO todo (description)
      VALUES ($1)
      RETURNING *
    `,[description]);

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
})

//update a todo

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await client.query(`
      UPDATE todo
      SET description=$1
      WHERE todo_id=$2
    `,[description, id]);

    res.json('Todo updated!')
  } catch (err) {
    console.error(err.message);
  }
})

//delete a todo

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await client.query(`
      DELETE FROM todo
      WHERE todo_id=$1
    `, [id]);

    res.json('Todo deleted!');
  } catch (err) {
    console.error(err.message);
  } 
})

app.listen(PORT, () => {
  console.log('Server listening on PORT ', PORT);
});