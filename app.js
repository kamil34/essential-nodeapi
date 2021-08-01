// app (express)
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// responses
const responses = {
    error: require('./responses/error')
}

app.get('/', (request, response) => {
    response.send("The '/' of the server.")
    })

app.listen(80)