"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var config_1 = require("../config");
var logger_1 = require("../logger");
function connect() {
    var dbUri = config_1["default"].dbUri;
    return mongoose_1["default"].connect(dbUri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(function (result) {
        logger_1["default"].info("Database connected");
    })["catch"](function (error) {
        logger_1["default"].error("db error", error);
        process.exit(1);
    });
}
exports["default"] = connect;