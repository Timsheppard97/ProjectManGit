const Product = require('../models/product.model.js')

module.exports.index = (req,res) => {
    res.json({message: "Hello World"})
}

module.exports.create=(req,res) => {
    Product.create(req.body)
    .then(newproduct =>{res.json(newproduct)})
    .catch(err=>{res.json(err)})
}

module.exports.getAll=(req,res) => {
    Product.find()
    .then(products => {res.json(products)})
    .catch(err => {res.json(err)});
}

module.exports.getOne=(req,res) => {
    Product.findOne({_id:req.params.id},req.body)
    .then(newproduct => {res.json(newproduct)})
    .catch(err => {res.json(err)})
}

//github changes