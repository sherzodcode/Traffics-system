import {Request , Response} from "express"
import { findSmsSucces } from "../services/sms.service"

export default async (req: Request, res: Response) => {
    try{

        const allSuccesSms = await findSmsSucces()

        console.log(allSuccesSms);

        if(!allSuccesSms){
            return res.status(500).json({
                message: "There's no SMS with success status"
            })
        }

        res.render('succesfully', {smsData: allSuccesSms})
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Succes SMS"
        })
    }
}