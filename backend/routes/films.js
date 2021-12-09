var express = require('express');
const Film = require("../modele/film");
var router = express.Router();

router.get('/', async function (req,res){
    try{

        const films = await Film.find();
        res.json(films);
    }catch(err){
        res.json({message:err})
    }
});

router.post('/', async function (req,res){
    const film = new Film({
        name:req.body.name,
        type:req.body.type
    })
    try{
        const newFilm = await film.save();
        res.json(newFilm);
        
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;