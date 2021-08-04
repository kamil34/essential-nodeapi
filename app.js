// app (express)
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// frameworks
const moment = require('moment'); // moment.js (timestamp & format)

// app.use((request, response, next) => {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if (request.method === 'OPTIONS') {
//         response.header('Access-Control-Allow-Methods', "POST, GET")
//         response.status(200).json({});
//         }
//     })

// routes
const routes = {
    getUser: require('./api/getUser')
};

app.use('/api/getUser', routes.getUser);

// 404 error
app.use((request, response, next) => {
    const error = new Error('Not found.');
    error.status = 404;
    next(error);
    });
app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
          'success': false,
          'code': error.status,
          'info': error.message,
          'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY")
          });
    });

// homepage
app.get('/', (request, response) => {
    response.send("The '/' of the server.");
    });

app.listen(8000);