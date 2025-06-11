const mongoose = require('mongoose');

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

