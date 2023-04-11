import {Request , Response} from "express"
import { changeSmsStatus } from "../services/sms.service"

export default async (req: Request , res: Response) => {
    try{
        const id  = +req.params.id

        console.log(id);
        

        await changeSmsStatus(id)

        res.redirect('/errors')
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "error in activate"
        })
    }
}