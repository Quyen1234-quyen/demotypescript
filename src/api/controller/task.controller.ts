import { Request, Response, NextFunction } from 'express';
import TaskService from './../../services/task.service';

class TaskController {

    public async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const TaskNew = new TaskService();
            const task = await TaskNew.createTask(req.body);
            return res.json(task);
        } catch (e) {
            console.log(e);
        }
    }
    public async getAllTask(req: Request, res: Response, next: NextFunction) {
        try {
            const TaskNew = new TaskService();
            const taskList = await TaskNew.getAllTask();
            return res.json(taskList);
        } catch (e) {
            console.log(e);
        }
    }
    public async getTaskById(req: Request, res: Response, next: NextFunction) {
        try {
            const TaskNew = new TaskService();
            const task = await TaskNew.getTaskById(req.params.id)
            return res.json(task);
        } catch (e) {
            console.log(e);
        }
    }
    public async deleteTaskById(req: Request, res: Response, next: NextFunction) {
        try {
            const TaskNew = new TaskService();
            const task = await TaskNew.deleteTaskById(req.params.id);
            return res.json({ status: 'Accout Delete' });
        } catch (e) {
            console.log(e);
        }
    }
    public async updateTaskById(req: Request, res: Response, next: NextFunction) {
        const name:string=req.body.name;
        const status:string=req.body.status;
        const newTask = {
            id: req.params.id,
            name: name,
            status: status
        }
        const TaskNew = new TaskService();
        const task = await TaskNew.updateTaskById(newTask);
        return res.json({status:'Successfull Updated'});
    }
}



export default TaskController;