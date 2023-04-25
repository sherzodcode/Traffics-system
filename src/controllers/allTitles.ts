import {Request , Response } from 'express'
import { allTitles } from '../services/title.service'

export default async(req: Request , res: Response ) => {
    try{
        const titles = await allTitles()

        if(!titles){
            return res.status(500).json({
                message: "NO titles here"
            })
        }

        return res.render('sms-codes', {titles} )

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Getting Titles",
            err
        })
    }
}