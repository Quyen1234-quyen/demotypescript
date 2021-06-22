import { Document } from 'mongoose';

export interface ITask {
    _id?: string;
    name: string;
    status: string;
}


export interface ITaskDocument extends Omit<ITask, '_id'>, Document { }

export interface ITaskInputDTO {
    name: string;
    status: string;
}

export interface ITaskUpdateInputDTO {
    id: string;
    name: string;
    status: string;
}