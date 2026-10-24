import express from 'express';

const app = express()

// menu 

app.get("/menu",(request , response)=>{
        console.log("Server is getting GET request");
        response.send("Server responding to GET request at /menu route")
})
app.post("/menu",(request , response)=>{
        console.log("Server is getting post request");
        response.send("Server responding to post request at /menu route")
})
app.put("/menu",(request , response)=>{
        console.log("Server is getting put request");
        response.send("Server responding to put request at /menu route")
})
app.delete("/menu",(request , response)=>{
        console.log("Server is getting put request");
        response.send("Server responding to put request at /menu route")
})




app.listen(8080, ()=>{
    console.log("Server is running");
})