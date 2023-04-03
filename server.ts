import express from "express"
import cors from "cors"
import {engine} from "express-handlebars"
import {Request , Response} from  "express"
import smsRoutes from "./src/routes/sms.routes" 

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use('/', smsRoutes)


app.get('/', (req: Request, res: Response) => {
    res.render('home')
})

app.listen(8070, () => {
    console.log("Server is running");
})