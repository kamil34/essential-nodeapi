// app (express)
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// frameworks
const moment = require('moment'); // moment.js (timestamp & format)

router.post('/', (request, response) => {
    // check if there are any keys in the list
    if (Object.keys(request.body).length >= 1) {
        response.status(200).json({
            'success': true,
            'code': 200,
            'info': "Sent a POST request to the './api/getUser' of the server.",
            'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY"),
            'body': request.body
            })
        }
    else {
        response.status(400).json({
            'success': false,
            'code': 400,
            'info': "Bad request.",
            'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY")
            })
        }
    })  

module.exports = router;