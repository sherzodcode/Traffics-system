import {Request , Response } from 'express'
import { deleteSms } from '../services/sms.service'

export default async(req: Request, res: Response) => {
    try{
        const id = +req.params.id

        const deletedSms = await deleteSms(id)

        if(deletedSms.status == 'Error'){
            return res.redirect('/errors')
        }
        return res.redirect('/success')
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error in deleting SMS"
        })
    }
}