"use strict";
exports.__esModule = true;
var server_1 = require("./classes/server");
var env_1 = require("./global/env");
var server = new server_1["default"]();
server.start(function () {
    console.log("Servidor corriendo en el puerto   " + env_1.SERVER_PORT);
});
