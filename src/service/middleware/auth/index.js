const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    if(process.env.NODE_ENV !== 'test'){
        const token_header = req.headers.auth;
    
        if(!token_header) return res.status(401).send({error: 'Token não enviado!'});
    
        jwt.verify(token_header, process.env.KEY_SISTEM, (err, decoded) =>{
            if(err) return res.status(401).send({error: 'Token Inválido!'});
        
            res.locals.auth_data = decoded;
            return next();
        })
    }
}

module.exports = auth;