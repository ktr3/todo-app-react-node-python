import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) return; // Evitar enviar tareas vacías

    try {
      const newTask = { name, description };
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
      onAdd(response.data); // Actualiza la lista de tareas
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea"
        ></textarea>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddTask;
