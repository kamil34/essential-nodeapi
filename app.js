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

// homepage
app.get('/', (request, response) => {
    response.send("The '/' of the server.");
    });

// errors
const error = new Error();

// error handling
app.use((request, response, next) => {
    error.statusCode = 404;
    throw error;
    });
app.use((error, request, response, next) => {

    // const error_messages = {
    //     400: 'Bad request.',
    //     404: 'Not found.',
    //     500: 'Internal Server Error.'
    //     }

    const error_messages = [
        {
            code: 400,
            message: "Bad request."
        },
        {
            code: 404,
            message: "Not found."
        },
        {
            code: 404,
            message: "Internal Server Error."
        }
    ];
    // Issue: Different expectations towards response.
    // Code:
    // Object.keys(error_messages).find(error_messages => error_messages.code === error.statusCode).message;

    response.status(error.statusCode || 500);
    // response.json({
    //       'success': false,
    //       'code': error.statusCode,
    //       'info': error.statusCode, //todo
    //       'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY")
    //       });
    });

app.listen(80);