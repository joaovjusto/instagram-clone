var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');


module.exports = function(){
    const app = express();

    const server = require('http').Server(app);
    const io = require('socket.io')(server);

    // var whitelist = ['http://localhost:8080']
    // var corsOptions = {
    // origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //     callback(null, true)
    //     } else {
    //     callback(new Error('Not allowed by CORS'))
    //     }
    // }
    // }

    app.use(cors());

    app.use((req,res, next) => {
        req.io = io;

        next();
    });

    app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads', 'resized')));
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}));

    consign()
    .include("src/controllers")
    .then('src/database')
    .then('src/routes')
    .into(app);

    return server;
};