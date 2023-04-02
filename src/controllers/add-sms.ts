import {Request , Response } from "express"

export default async (req: Request, res: Response) => {
    try{
        return res.render('add-sms')
    }catch(err){
        return res.status(500).json({
            message: "Error in adding"
        })
    }
}