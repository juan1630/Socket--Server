import express from 'express';
import { SERVER_PORT } from '../global/env';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';

export default class Server {
   
    private static _instance: Server;
    public app: express.Application;
    public port: number;
    // traemosla configuracion el servdior de io
    public io: socketIO.Server;
    private httpServer: http.Server;
    static app: any;



    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSocket();
    }



    public static get instance() {
        return this._instance || (this._instance = new this());
    }


    private escucharSocket() {
        console.log('Escuchando conexiobnes');
        this.io.on('connection', (client) => {
            console.log('Nuevo cliente conectado');

            // escuchando mensajes

            socket.mensaje( client, this.io );
            
        // Desconceción
           socket.desconectado(client);
        });
        // on escucha el evento
    }

    start(callback: any) {
        this.httpServer.listen(this.port, callback);
    }
}
