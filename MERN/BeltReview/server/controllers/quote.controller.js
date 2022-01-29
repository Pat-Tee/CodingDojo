const Quote = require("../models/quote.model.js");
const quoteRoutes = require("../routes/quote.routes.js");

module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello World" });
};

module.exports.findAllQuotes = (req, res) => {
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes});
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.createNewQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newQuote=>{
            res.json({results: newQuote})
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.findById = (req,res)=>{
    Quote.findOne({_id: req.params.id})
        .then(quote=>{
            res.json({results: quote});
        })
        .catch(err=>{
            console.log({err:err});
        })
}

module.exports.updateQuote = (req,res)=>{
    Quote.findOneAndUpdate(
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

module.exports.deleteQuote = (req, res)=>{
    Quote.deleteOne({_id:req.params.id})
        .then(deleted=> {
            res.json( { results: deleted });
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.getRandomQuote = (req,res)=>{
    Quote.find()
    .then(allQuotes=>{
        res.json({results: allQuotes[ Math.floor(Math.random() * allQuotes.length) ] });
    })
    .catch(err=>{
        res.json({err:err});
    })
}