const express = require('express');
const app = express();

app.use(express.static('./public'))
app.get('/about',(req, res)=>{
    console.log("nppe cant do taht mate")
    res.status(404).send("this is a bad req")
})

app.listen(5500,()=>{
    console.log("server listening on port "+ 5500);
})
