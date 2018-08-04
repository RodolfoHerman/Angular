const jsonServer = require('json-server');
const fs = require('fs');
const https = require('https');
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

const jwt = require('jsonwebtoken');

server.use(middlewares);

server.use(jsonServer.bodyParser);

/**
 * Middleware para login
 */
server.post('/login', (req, resp) => {

    const user = req.body;

    if(isValid(user)) {

        var usu = users[user.email];

        const token = jwt.sign({sub: usu.email, iss: 'meat-api'}, 'meat-api-password');

        resp.json({name: usu.name, email: usu.email, accessToken: token});

    } else {

        resp.status(403).json({message: 'Dados inválidos'});
    }

});

/**
 * Middleware para rota
 */
server.use('/orders', (req, resp, next) => {

    const token = extractToken(req);

    if(!token) {

        resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
        resp.status(401).json({message: 'Você precisa se autenticar.'});

    } else {

        jwt.verify(token, 'meat-api-password', (error, decoded) => {
            if(decoded) {

                next();
            } else {

                resp.status(403).json({message: 'Não autorizado.'})
            }
        })

    }

});


server.use(router);

const options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
    console.log('JSON SERVER is running on https://localhost:3001');
})


/**
 * OBJETO - USUARIO
*/
class Usuario {

    constructor(email, name, password) {

        this.name = name;
        this.email = email;
        this.password = password;
    }

    matches(another) {

        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

const users = {
    "juliana@gmail.com": new Usuario('juliana@gmail.com', 'Juliana', 'juliana23'),
    "amanda@gmail.com": new Usuario('amanada@gmail.com', 'Amanda', 'amanda21')
}

/**
 * FUNÇÕES
 */
function isValid(user) {

    if(!user) {

        return false;
    }

    const dbuser = users[user.email];

    return dbuser !== undefined && dbuser.matches(user);
}

function extractToken(req) {

    let token = undefined;

    if(req.headers && req.headers.authorization) {

        //Informações no header
        //Authorization: Bearer ZZZ.ZZZ.ZZZ

        const parts = req.headers.authorization.split(' ');

        if(parts.length == 2 && parts[0] == 'Bearer') {

            token = parts[1];
        }

    }

    return token
}