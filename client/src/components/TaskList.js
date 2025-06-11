import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, List, ListItem, ListItemText, Checkbox, Box } from '@mui/material';

const TaskList = ({ onDelete, onComplete }) => {
  const [tasks, setTasks] = useState([]);

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
  }, []);

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>Lista de Tareas</h2>
      <List>
        {tasks.map((task) => (
          <ListItem key={task._id}>
            <ListItemText
              primary={task.name}
              secondary={task.description}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <Checkbox
              checked={task.completed}
              onChange={() => onComplete(task._id, !task.completed)}
            />
            <Button variant="contained" color="secondary" onClick={() => onDelete(task._id)}>
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;

