import { PrismaClient } from ".prisma/client";
import { addSmsDto } from "../models/add-sms.dto";

const prisma = new PrismaClient()

export const addSms = (sms: addSmsDto) => {
    return prisma.sms.create({
        data: {
            your_number: sms.your_number,
            price: sms.price,
            traffic: sms.traffic,
            client_number: sms.client_number
        }
    })
}


export const findSmsSucces = () => {
    return prisma.sms.findMany({
        where: {
            status: "succes"
        }
    })
}

export const findSmsError = () => {
    return prisma.sms.findMany({
        where: {
            status: "error"
        }
    })
}

export const findAllSms = () => {
    return prisma.sms.findMany()
}

export const changeSmsStatus = (id: number) => {
    return prisma.sms.update({
        where :{
            id
        }, data: {
            status: "succes"
        }
    })
}

export const deleteSms = (id: number) => {
    return prisma.sms.delete({
        where: {
            id
        }
    })
}