// app (express)
const express = require('express');
const app = express();

module.exports = function(code) {
        const codes = {
                400: 'Bad request',
                401: 'Unauthorized',
                403: 'Forbidden',
                404: 'Not found'
        }
        // return codes[codes.id(code)]
}