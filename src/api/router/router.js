"use strict";
exports.__esModule = true;
var task_controller_1 = require("../controller/task.controller");
var validatorMiddleware_1 = require("../middleware/validatorMiddleware");
var validatorMiddleware_2 = require("../middleware/validatorMiddleware");
exports["default"] = (function (app) {
    app.post("/task", validatorMiddleware_1["default"](validatorMiddleware_2.TaskSchema), new task_controller_1["default"]().createTask);
    app.get("/task", new task_controller_1["default"]().getAllTask);
    app.get("/task/:id", new task_controller_1["default"]().getTaskById);
    app["delete"]("/task/:id", new task_controller_1["default"]().deleteTaskById);
    app.put("/task/:id", new task_controller_1["default"]().updateTaskById);
});
