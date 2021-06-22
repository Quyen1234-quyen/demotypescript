"use strict";
exports.__esModule = true;
var pino_1 = require("pino");
var dayjs_1 = require("dayjs");
var log = pino_1["default"]({
    prettyPrint: true,
    base: {
        pid: false
    },
    timestamp: function () { return "\"time :\"" + dayjs_1["default"]().format(); }
});
exports["default"] = log;
