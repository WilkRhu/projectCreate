const request = require('supertest');
const app = require('../../src/web/app');
const { productSucess, productError, productUpdateMock } = require('../supoort/models/productMock');

describe('Product', () => {
    describe('Create Products', ()=>{
        test('return status 201 on create', async () =>{
            const product = await request(app)
            .post('/products')
            .send(productSucess);
            expect(product.status).toBe(201);
        })

        test('return error validation status 400', async () =>{
            const product = await request(app)
            .post('/products')
            .send(productError);
            expect(product.status).toBe(400);
            expect(product.body).toBe('Error validation');
        })
    });

    describe('Update Products', () => {
       test('return id not found', async () => {
            const product = await request(app)
            .put('/productsUpdate/1000')
            .send(productSucess);
            expect(product.status).toBe(404);
            expect(product.body).toBe('User not found');
        })

        test('return 201 update product', async () => {
            const productCreate = await request(app)
            .post('/products')
            .send(productSucess);
 
            const productUpdate = await request(app)
            .put(`/productsUpdate/${productCreate.body.id}`)
            .send(productUpdateMock);
            expect(productUpdate.status).toBe(201);

        })
    });

    describe('Get Products', () =>{
        test('Get All Products', async () =>{
            const productAll = await request(app)
            .get('/products')
            expect(productAll.status).toBe(200)
        })

        test('Get All Id', async () =>{
            const productCreateId = await request(app)
            .post('/products')
            .send(productSucess);

            const productAll = await request(app)
            .get(`/products/${productCreateId.body.id}`)
            expect(productAll.status).toBe(200)
        })

        test('Product Paginate', async () =>{
            
            const productPaginate = await request(app)
            .get('/paginate?page=1&offset=10')
            expect(productPaginate.status).toBe(200)
        })
    })

})