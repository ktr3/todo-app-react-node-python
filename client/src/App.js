import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Función para manejar la eliminación de tareas
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id)); // Actualiza la lista de tareas
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  // Función para manejar la actualización de tareas (completar o descompletar)
  const handleComplete = async (id, completed) => {
    try {
      const updatedTask = { completed };
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  // Función para agregar tareas a la lista
  const handleAdd = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Aplicación de Tareas</h1>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
};

export default App;
