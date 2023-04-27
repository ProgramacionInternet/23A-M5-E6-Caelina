const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', 3000);

//middleware
    //monitor de solicitudes
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//inicializando el server
app.listen(3000, () => {
    console.log('Server on port 3000');
});