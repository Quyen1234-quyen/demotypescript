import {Express} from 'express';
import TaskController from '../controller/task.controller';
import joiValidatorMiddleware from '../middleware/validatorMiddleware';
import { TaskSchema } from '../middleware/validatorMiddleware';
export default (app: Express): void => {
    app.post("/task",joiValidatorMiddleware(TaskSchema),new TaskController().createTask);
    app.get("/task",new TaskController().getAllTask);
    app.get("/task/:id",new TaskController().getTaskById);
    app.delete("/task/:id",new TaskController().deleteTaskById);
    app.put("/task/:id",new TaskController().updateTaskById);
}