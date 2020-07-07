const Joi = require('@hapi/joi');

const userValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: ['com', 'net']
            }
        }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    token: [
        Joi.string(),
        Joi.number()
    ]

});

module.exports = userValidation;
