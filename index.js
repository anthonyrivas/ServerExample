const express = require('express');
const path = require('path');
const Response = require('./Response');
const PORT = 3000;

const app = express();

const students = [
  {
    name: 'Nina',
    age: 38,
    favoriteFood: 'Chocolate Chip Cookies'
  },
  {
    name: 'Emily',
    age: 26,
    favoriteFood: 'Mashed Potatoes'
  },
  {
    name: 'Jerry',
    age: 18,
    favoriteFood: 'Breakfast Burrito'
  },
  {
    name: 'Linnea',
    age: 25,
    favoriteFood: 'French Fries'
  },
  {
    name: 'Isaac',
    age: 25,
    favoriteFood: 'Steak'
  }
]

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'api.html'));
});

app.get('/api/students', (req, res) => {
  const out = new Response(students);
  res.json(out);
});

app.get('/api/student', (req, res) => {
  const {name} = req.query;
  const student = students.filter((s) => s.name.toLowerCase() === name.toLowerCase())[0];
  const out = new Response(student);
  if (!student) {
    out.addError('The student was not found');
  }
  res.json(out);
});

app.listen(PORT, () => console.log('Server started'));