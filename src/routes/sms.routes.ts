import { Router } from "express";
import { AddSmsPage ,   SendingTitlePage, SettingsPage} from "../controllers/getPages";
import addSms from "../controllers/addSms";
import errorSms from "../controllers/errorSms";
import changeToSucces from "../controllers/changeToSucces";
import succesSms from "../controllers/succesSms";
import deleteSms from "../controllers/deleteSms";
import addTitle from "../controllers/addTitle";
import allTitles from "../controllers/allTitles";
import deleteTitle from "../controllers/deleteTitle";

const router = Router()

router.get('/add', AddSmsPage)
router.post('/add/sms', addSms)


router.get('/sms-codes', allTitles)
router.get('/delete/title/:id', deleteTitle)

router.get('/success', succesSms )

router.get('/errors', errorSms)
router.get('/errors/activate/:id', changeToSucces )

router.get('/sending-title', SendingTitlePage )
router.post('/title', addTitle)

router.get('/settings', SettingsPage)

router.get('/delete/:id', deleteSms)

export default router