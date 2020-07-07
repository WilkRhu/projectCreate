const productSchema = (data) => {
    const product = {
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        stock: data.stock
    }
    return product;
}

module.exports = productSchema;