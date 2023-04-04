import {Request , Response} from 'express'
import { addSms } from '../services/sms.service'
import { addSmsDto } from '../models/add-sms.dto'

export default async (req: Request, res: Response) => {
    try{
        const sms: addSmsDto = req.body
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "error in sending sms"
        })
    }
}