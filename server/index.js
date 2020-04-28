const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const apiRouter = require('./api/v1');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const cors = require('cors');

db.init();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Mount the request
app.use('/api/v1', apiRouter);

// Health check
app.get('/ping', (req, res) => {
    res.status(200).json('Site is up and running');
});

// redirect request to FE
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});


// let msg = `Have access to mongodb via MONGO_URL: ${process.env.MONGO_URL} `;
// console.log(msg);

module.exports = server;