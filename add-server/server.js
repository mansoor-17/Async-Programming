const express = require("express");

const app = express();

app.get("/sum/:num1/:num2", (req,res)=>{
        num1 = Number(req.params.num1);
        num2 = Number(req.params.num2);

        res.send((num1+num2).toString());
})


app.listen(8080);