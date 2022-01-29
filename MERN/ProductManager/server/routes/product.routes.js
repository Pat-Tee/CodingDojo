const ProductController = require("../controllers/product.controller.js");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products/random", ProductController.getRandomProduct);
    app.get("/api/products/:id", ProductController.findById);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);

}