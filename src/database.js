const mongoose = require('mongoose');

mongoose.connect(`URL_MONGO`, {
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