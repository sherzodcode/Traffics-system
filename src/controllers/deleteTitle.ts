import {Request , Response }  from 'express'
import { deleteTitleById } from '../services/title.service'

export default async(req: Request, res: Response) => {
    try{
        const id = +req.params.id

        const deletedTitle = await deleteTitleById(id)

        res.redirect('/sms-codes')
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Deleting Title"
        })
    }
}