const express=require("express")
const socketio=require("socket.io")
const app=express();

app.use(express.static(__dirname+"/public"));



const expressServer =app.listen(3000)

const io = socketio(expressServer);

io.on("connection",(socket)=>{
    console.log("Socket connected on server side ",socket.id);
    socket.emit("serverMsg",{data:"server balea balea..."})
    
    socket.on("clientMsg",(data)=>{
        console.log("message from client ==> ",data);
    });
})
