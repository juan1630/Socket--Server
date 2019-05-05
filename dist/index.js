"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./classes/Server"));
const env_1 = require("./global/env");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = Server_1.default.instance;
// body parser debe de ir antes ya que las demas dependencias lo usan
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// genera un objeto de js
// cors
// para recibir peticiones de otros puertos
server.app.use(cors_1.default({ origin: true, credentials: true }));
// rutas de los servicios
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`Servidor corriendo en el puerto   ${env_1.SERVER_PORT}`);
});
