export const desconectado = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
};
// escucahr mensajes
export const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
