import {Request , Response} from "express"
import { addTitle } from "../services/title.service"

export default async(req: Request, res: Response) => {
    try{
        const {nickname, number, message} = req.body
        
        const title = {
            nickname,
            number,
            message
        }



        await addTitle(title)

        return res.redirect('/')
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Sending title",
            err
        })
    }
}