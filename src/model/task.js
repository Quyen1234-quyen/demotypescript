"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});
var Task = mongoose_1["default"].model("Task", TaskSchema);
exports["default"] = Task;
