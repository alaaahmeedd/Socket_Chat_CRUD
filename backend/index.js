import express, {json} from 'express';
import { Server } from 'socket.io';
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

const server = app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

const io =  new Server(server, {
    cors: "*"
})
io.on("connection", (socket) =>{
    console.log("socket connected", socket.id);
    socket.on("disconnect", () =>{
        console.log("socket disconnected", socket.id);
    
    })

    // recive data from frontend

    socket.on('sendData',(data) =>{
        console.log(data);
        
        // replay on frontend
        io.emit("message", data)

    })

})

