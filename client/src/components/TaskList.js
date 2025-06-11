import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ onDelete, onComplete }) => {
  const [tasks, setTasks] = useState([]);

  // Función para obtener las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <div>
              <span>{task.name} - {task.description}</span>
              <button onClick={() => onComplete(task._id, !task.completed)}>
                {task.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'}
              </button>
              <button onClick={() => onDelete(task._id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
