import { Request, Response, NextFunction } from 'express';
import Joi from "joi";

export const TaskSchema=Joi.object({
    name: Joi.string().min(6)
    .max(100)
    .required(),
    status:Joi.string().min(6)
    .max(100)
    .required()
});

export default function joiValidatorMiddleware(schema: Joi.Schema) {
    return (req:Request,res:Response,next:NextFunction)=>{
        try{
            const result=schema.validate(req.body,{
                stripUnknown: true
            });
            if(result.error){
                next(`Validation error: ${result.error.details.map(x => x.message).join(', ')}`);
            }else{
                req.body = result.value;
                next();
            }
        }catch(e){
            res.json({status:"Failed"});
        }
    }
}