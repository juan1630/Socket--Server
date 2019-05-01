import Server from './classes/server';
import { SERVER_PORT } from './global/env';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// body parser debe de ir antes ya que las demas dependencias lo usan

server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use(bodyParser.json() );
// genera un objeto de js

// cors
// para recibir peticiones de otros puertos
server.app.use( cors({ origin: true, credentials: true }) )

// rutas de los servicios
server.app.use('/', router);

server.start( () => { 
    console.log(`Servidor corriendo en el puerto   ${SERVER_PORT}`);
 })