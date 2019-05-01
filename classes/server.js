"use strict";
exports.__esModule = true;
var express_1 = require("express");
var env_1 = require("../global/env");
var server = /** @class */ (function () {
    function server() {
        this.app = express_1["default"]();
        this.port = env_1.SERVER_PORT;
    }
    server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    return server;
}());
exports["default"] = server;
