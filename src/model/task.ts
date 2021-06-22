import mongoose  from "mongoose";
import { ITaskDocument } from "../interfaces/ITask";
const TaskSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        status:{
            type:String,
            require:true
        }

    },
    {
        timestamps:true
    }
);


const Task=mongoose.model<ITaskDocument>("Task",TaskSchema);

export default Task;
