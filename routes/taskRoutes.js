const express = require('express');
const Task = require('../Task');
const router = express.Router();

// Obtener todas las tareas
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas', error });
  }
});

// Crear una nueva tarea
router.post('/tasks', async (req, res) => {
  const { name, description } = req.body;

  const newTask = new Task({
    name,
    description,
  });

  try {
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea', error });
  }
});

// Actualizar una tarea
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { name, description, completed },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarea', error });
  }
});

// Eliminar una tarea
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    res.json({ message: 'Tarea eliminada', task: deletedTask });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea', error });
  }
});

module.exports = router;

