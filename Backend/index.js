const express = require('express');
const app = express();
const port = 8080
app.get('/assistant/greet',(req,res)=>{
    const name = req.query.name
    const date = new Date().getDay()
    const daymessage = ["Happy Monday!","Have a wonderful day!","Have a wonderful day!","Have a wonderful day!","Have a wonderful day!","Have a wonderful day!","Have a wonderful day!"]
    res.send({
        "WelcomeMessage":`Hello,${name}! Welcome to our assitant app ${daymessage[date]}`
    })

})


app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})