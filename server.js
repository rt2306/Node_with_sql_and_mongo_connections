import  express  from "express";
const app = express()
app.use(express.json());
const port = 5000
import cors from 'cors'  
app.use(cors())

app.get('/',(req,res) =>{
    res.send('app is working')
})
 

app.listen(port,() =>{
    console.log(`app is listening on  ${port}` );
})