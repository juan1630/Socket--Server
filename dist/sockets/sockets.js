"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectado = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
};
// escucahr mensajes
exports.mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
