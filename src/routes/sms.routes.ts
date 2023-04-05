import { Router } from "express";
import { AddSmsPage , SmsCodesPage, SuccesfullyPage, ErrorsPage, SendingTitlePage, SettingsPage} from "../controllers/getPages";
import addSms from "../controllers/addSms";

const router = Router()

router.get('/add', AddSmsPage)
router.post('/add/sms', addSms)


router.get('/sms-codes', SmsCodesPage)
router.get('/success', SuccesfullyPage)
router.get('/errors', ErrorsPage)
router.get('/sending-title', SendingTitlePage )
router.get('/settings', SettingsPage)

export default router