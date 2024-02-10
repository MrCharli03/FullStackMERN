const express = require('express');
const morgan = require('morgan');
const path = require('path'); //Para unir directorios

const { mongoose } = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); //Para ver las peticiones que llegan al servidor
app.use(express.json()); //Para que el servidor entienda los datos que le envia el cliente

//Routes
app.use( '/api/tasks' ,require('./routes/task.routes'));

//Static files
//Para ver la ruta dindex.js
//multiplataforma
app.use(express.static(path.join(__dirname, 'public')));


//Server is listening
app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')} `);
});