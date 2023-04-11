import {Request , Response } from 'express'
import { findSmsError } from '../services/sms.service'

export default async(req: Request, res: Response) => {
    try{
        const allErrorSms = await findSmsError()


        console.log(allErrorSms);
        

        if(!allErrorSms){
            return res.status(500).json({
                message: "There's no SMS with error status"
            })
        }

        res.render('errors' , {smsData: allErrorSms})
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Error controller"
        })
    }
}

