const mongoose = require('mongoose');

// Definición del esquema de tarea
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // Para agregar automáticamente las fechas de creación y actualización
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
