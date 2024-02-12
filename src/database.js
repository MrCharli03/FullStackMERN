const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:1234@cluster0.2myjuwv.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

module.exports = mongoose;