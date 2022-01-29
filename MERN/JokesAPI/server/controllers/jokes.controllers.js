const Joke = require("../models/jokes.models.js");

module.exports.findAllJokes = (req, res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes});
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.createNewJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.findById = (req,res)=>{
    Joke.findOne({_id: req.params.id})
        .then(joke=>{
            res.json({results: joke});
        })
        .catch(err=>{
            console.log({err:err});
        })
}

module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updated=> {
            res.json( { results: updated });
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id:req.params.id})
        .then(deleted=> {
            res.json( { results: deleted });
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.getRandomJoke = (req,res)=>{
    Joke.find()
    .then(allJokes=>{
        res.json({results: allJokes[ Math.floor(Math.random() * allJokes.length) ] });
    })
    .catch(err=>{
        res.json({err:err});
    })
}