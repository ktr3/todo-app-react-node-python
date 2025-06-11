import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) return;

    try {
      const newTask = { name, description };
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
      onAdd(response.data);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre de la tarea"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Descripción de la tarea"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Agregar
        </Button>
      </form>
    </Box>
  );
};

export default AddTask;
