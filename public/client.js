const socket=io("http://localhost:3000");

socket.on("connect",()=>{
    console.log("Client connected on ",socket.id);
    socket.emit("clientMsg",{data: "hi there.."});
})

socket.on("serverMsg",(data)=>{
    console.log(
        "msg received from server... \n ",data
    );

})