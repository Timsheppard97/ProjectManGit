const ProductController = require('../controllers/product.controller')
module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.create);
    app.get('/api/products', ProductController.getAll)
    app.get('/api/products/:id', ProductController.getOne)
}



//githubs a bitch