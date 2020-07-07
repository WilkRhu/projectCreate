const Joi = require('@hapi/joi');

const productsValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .required(),

    category: Joi.string()
        .required(),

    price: Joi.number()
        .max(24)
        .required(),

    stock: Joi.string()
        .required(),
});

module.exports = productsValidation;