const Joi = require('@hapi/joi');

const signInValidation = Joi.object({
      email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: ['com', 'net', 'br']
            }
        })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

});

module.exports = signInValidation;
