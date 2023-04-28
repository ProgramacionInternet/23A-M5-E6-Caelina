const express = require('express');
const app = express();
const morgan = require('morgan');

////ajustes
var RestPort = 3000;
    //tomar el puerto asignado por servicio de cloud o el 3000
app.set('port', process.env.PORT || RestPort);
app.set('json spaces',2);

////middleware
    //monitor de solicitudes
app.use(morgan('dev'));
    //recibir texto de formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('../routes/index'));

////inicializando el server
app.listen(3000, () => {console.log(`Server on Port ${RestPort}`);});