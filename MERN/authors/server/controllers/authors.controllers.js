const Author = require("../models/authors.models.js");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors=>{
            res.json({results: allAuthors});
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.createNewAuthor = (req,res)=>{
    Author.create(req.body)
        .then(newAuthor=>{
            res.json({results: newAuthor})
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.findById = (req,res)=>{
    Author.findOne({_id: req.params.id})
        .then(Author=>{
            res.json({results: Author});
        })
        .catch(err=>{
            console.log({err:err});
        })
}

module.exports.updateAuthor = (req,res)=>{
    Author.findOneAndUpdate(
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

module.exports.deleteAuthor = (req, res)=>{
    Author.deleteOne({_id:req.params.id})
        .then(deleted=> {
            res.json( { results: deleted });
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.getRandomAuthor = (req,res)=>{
    Author.find()
    .then(allAuthors=>{
        res.json({results: allAuthors[ Math.floor(Math.random() * allAuthors.length) ] });
    })
    .catch(err=>{
        res.json({err:err});
    })
}