import { PrismaClient } from ".prisma/client";
import {addTitleDto} from '../models/add-title.dto'

const prisma = new PrismaClient()



export const addTitle = (title: addTitleDto) => {
    return prisma.title.create({
        data: {
            nickname: title.nickname,
            number: title.number,
            message: title.message
        }
    })
}

export const findByNickname = (nickname: string) => {
    return prisma.title.findFirst({
        where: {
            nickname
        }
    })
}

export const allTitles = () => {
    return prisma.title.findMany()
}

export const deleteTitleById = (id: number) => {
    return prisma.title.delete({
        where: {
            id
        }
    })
}