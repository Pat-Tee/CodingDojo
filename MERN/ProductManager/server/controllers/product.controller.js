const Product = require("../models/product.model.js");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts});
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.createNewProduct = (req,res)=>{
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.findById = (req,res)=>{
    Product.findOne({_id: req.params.id})
        .then(Product=>{
            res.json({results: Product});
        })
        .catch(err=>{
            console.log({err:err});
        })
}

module.exports.updateProduct = (req,res)=>{
    Product.findOneAndUpdate(
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

module.exports.deleteProduct = (req, res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(deleted=> {
            res.json( { results: deleted });
        })
        .catch(err=>{
            res.json({err:err});
        })
}

module.exports.getRandomProduct = (req,res)=>{
    Product.find()
    .then(allProducts=>{
        res.json({results: allProducts[ Math.floor(Math.random() * allProducts.length) ] });
    })
    .catch(err=>{
        res.json({err:err});
    })
}