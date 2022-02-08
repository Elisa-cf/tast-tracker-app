const express = require('express');
const cors = require('cors');
const Task = require('./models/todoModel')


const app = express();

// global middlewares
app.use(express.json());
app.use(cors("*"));


app.get('/api', (req, res) => {
 res.status(200).send("Hello World")
})


// GET all todos
app.get('/api/tasks', async (req, res) => {
 try {
  const tasks = await Task.find();
  res.status(200).json(tasks);
 } catch (error) {
  console.error(error);
  res.sendStatus(500);
 }
})

// CREATE a new todo
app.post('/api/tasks', async (req, res) => {
 try {
  const result = await Task.create({
   text: req.body.text,
   created_at:  req.body.date,
   remind_me: req.body.reminder,
  })
  console.log(result);
  res.sendStatus(201)
 } catch (error) {
  console.error(error);
  res.sendStatus(500);
 }
})


// UPDATE a todo
app.patch('/api/tasks/:id', async (req, res) => {
    try {
        const result = await Todo.updateOne({ '_id': req.params.id }, {"text": req.body.text})
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

// DELETE a todo
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const result = await Task.deleteOne({ '_id': req.params.id })
        console.log(result);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})


// Serve static assets if in production. 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


module.exports = app;