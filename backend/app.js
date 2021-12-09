var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const hostname="localhost";
const port=3001;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var filmsRouter = require("./routes/films");

const mongoose = require('mongoose')

var app = express();
require('dotenv/config');
const bodyparser=require('body-parser');

app.use(bodyparser.json());


app.get ('/test', (req,res) =>{
    res.json({
        req: req.method,
        data: "this is a GET"
    })
});
app.put('/test',(req,res) =>{
    res.json({
        req: req.method,
        data:"This is a PUT"
    });
});

try{
    mongoose.connect(process.env.DB_CONNECTION,
        {useNewUrlParser: true},
        () => console.log('Connected to DB!')
        )}catch(err){
            res.json({message:err});
        };

app.listen(port, hostname),() =>{
    console.log(`mon serveur fonctionne sur http://${hostname}:${port}\n`);
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/films", filmsRouter);




module.exports = app;
