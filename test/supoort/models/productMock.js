const faker = require('faker');


const productSucess ={
    name: faker.commerce.productName(),
    description: "Teste description",
    price: 5.8000,
    category: faker.commerce.department(),
    stock: "stocker"   
};


const productError ={
    name: faker.commerce.productName(),
    description: "Teste description",
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    stock: "stocker"   
};

const productUpdateMock = {
    name: "Update Name",
    description: "Update Description",
    price: 8.99,
    category: "Update Category",
    stock: '8'
}



module.exports = {
    productSucess,
    productError,
    productUpdateMock
};