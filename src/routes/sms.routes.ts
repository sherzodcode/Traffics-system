import { Router } from "express";
import addSms from "../controllers/add-sms";

const router = Router()

router.get('/add', addSms)

export default router