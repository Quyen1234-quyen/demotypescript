"use strict";
exports.__esModule = true;
var express_1 = require("express");
var config_1 = require("./config");
var connect_1 = require("./db/connect");
var router_1 = require("./api/router/router");
var port = config_1["default"].port;
var host = config_1["default"].host;
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
connect_1["default"]();
router_1["default"](app);
app.listen(port, host, function () {
    console.log("Server listening at http://" + host + ":" + port);
});
