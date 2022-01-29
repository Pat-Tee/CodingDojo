const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( cors() );

const quotesTable = [
    {content:"Zero"},
    {content:"One"},
    {content:"Two"},
    {content:"Three"},
    {content:"Four"},
    {content:"Five"},
    {content:"Six"},
    {content:"Seven"},
    {content:"Eight"},
    {content:"Nine"},
]

app.get("/api",(req,res)=>{
    res.json({
        status: "OK", 
        msg:"Hello Express!",
        count: quotesTable.length,
        data: quotesTable
    })
})

app.post("/api/quotes", (req,res)=>{
    console.log("Request: ", req.body);
    quotesTable.push(req.body);
    res.json({
        status:"OK",
        count: quotesTable.length,
        data: quotesTable 
    })
})

app.get("/api/quotes/:index", (req,res)=>{
    const {index} = req.params;
    console.log("GET quote by index: ", req.params.index);
    res.json({
        data: quotesTable[index]
    });
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );