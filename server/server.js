const express = require('express');
const connectDB = require('./db');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Usar las rutas de tareas
app.use('/api', taskRoutes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
