import {Request , Response } from "express"



export const AddSmsPage = (req: Request, res: Response) => {
    return res.render('add-sms')
}

export const SmsCodesPage = (req: Request, res: Response) => {
    return res.render('sms-codes') 
}


// export const SuccesfullyPage = (req: Request, res: Response) => {
//     return res.render('succesfully')
// }

// export const ErrorsPage = (req: Request, res: Response) => {
//     return res.render('errors')
// }


export const SendingTitlePage = (req: Request, res: Response) => {
    return res.render('send-title')
}
export const SettingsPage = (req: Request, res: Response) => {
    return res.render('settings')
}