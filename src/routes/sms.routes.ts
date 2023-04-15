import { Router } from "express";
import { AddSmsPage , SmsCodesPage,  SendingTitlePage, SettingsPage} from "../controllers/getPages";
import addSms from "../controllers/addSms";
import errorSms from "../controllers/errorSms";
import changeToSucces from "../controllers/changeToSucces";
import succesSms from "../controllers/succesSms";
import deleteSms from "../controllers/deleteSms";


const router = Router()

router.get('/add', AddSmsPage)
router.post('/add/sms', addSms)


router.get('/sms-codes', SmsCodesPage)
router.get('/success', succesSms )

router.get('/errors', errorSms)
router.get('/errors/activate/:id', changeToSucces )

router.get('/sending-title', SendingTitlePage )
router.get('/settings', SettingsPage)

router.get('/delete/:id', deleteSms)

export default router