// app (express)
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// frameworks
const moment = require('moment'); // moment.js (timestamp & format)

// errors
const error = new Error();

router.post('/', (request, response) => {
    // check if there are any keys in the list
    if (Object.keys(request.body).length >= 1) {
        response.status(200).json({
            'success': true,
            'code': response.statusCode,
            'info': "Sent a POST request to the '/api/addUser' of the server.",
            'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY"),
            'body': request.body
            });
        }
    else {
        error.statusCode = 400;
        throw error;
        };
    });  

module.exports = router;