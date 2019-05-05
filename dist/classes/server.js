"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("../global/env");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const socket = __importStar(require("../sockets/sockets"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = env_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSocket();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSocket() {
        console.log('Escuchando conexiobnes');
        this.io.on('connection', (client) => {
            console.log('Nuevo cliente conectado');
            // escuchando mensajes
            socket.mensaje(client, this.io);
            // Desconceción
            socket.desconectado(client);
        });
        // on escucha el evento
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
