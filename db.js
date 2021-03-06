const { Client } = require('pg');

// const client = new Client(process.env.DATABASE_URL || 'postgres://localhost:5432/todo_react');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/todo_react',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = client;