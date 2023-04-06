import {Request , Response } from 'express'
import { findSmsError } from '../services/sms.service'

export default async(req: Request, res: Response) => {
    try{
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Error controller"
        })
    }
}