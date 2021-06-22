import Task from '../model/task';
import { ITaskInputDTO,ITaskUpdateInputDTO } from '../interfaces/ITask';

export default class TaskService{
    public async createTask(input:ITaskInputDTO){
        try{
            return await Task.create(input);
        }catch(e){
            console.log(e);  
        }
    }
    public async getAllTask(){
        try{
            return await Task.find();
        }catch(e){
            console.log(e)
        }
    }
    public async getTaskById(input:string){
        try{
            return await Task.findOne({_id:input});
        }catch(e){
            console.log(e);
        }
    }
    public async updateTaskById(input:ITaskUpdateInputDTO,id?:string){
        try{
            return await Task.findByIdAndUpdate(input.id,input);
        }catch(e){
            
        }
    }
    public async deleteTaskById(input:string){
        try{
            return await Task.findOneAndRemove({_id:input});
        }catch(e){

        }
    }
}