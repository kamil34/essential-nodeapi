// app (express)
import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// frameworks
import moment from 'moment'; // moment.js (timestamp & format)

// app.use((request, response, next) => {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if (request.method === 'OPTIONS') {
//         response.header('Access-Control-Allow-Methods', "POST, GET")
//         response.status(200).json({});
//         }
//     })

// routes
import { router as getUser } from './api/getUser.js';
import { router as addUser } from './api/addUser.js';
import { router as removeUser } from './api/removeUser.js';

app.use(getUser);
app.use(addUser);
app.use(removeUser);

// homepage
app.get('/', (request, response) => {
    response.send("The '/' of the server.");
    });

// errors
const error = new Error();

// 404 error handling
app.use((request, response) => {
    error.statusCode = 404;
    throw error;
    });

// errors
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
        }
        // {
        //     code: 404,
        //     message: "Not found."
        // },
        // {
        //     code: 500,
        //     message: "Internal Server Error."
        // }
    ];

    // Issue: Different expectations towards response.
    // Code:
    // Object.keys(error_messages).find(error_messages => error_messages.code === error.statusCode).message;
    
    // IDEA #1 (Aug 5, 2021):
    // 1. A `for` loop with checking if there is such data in `error_messages` array,
    // 2. Providing index by assigning `for loop` result to a variable in what index to search `message` from,
    // 2.1. Throwing the response with requesting data such as `status code, status message`
    // 3. `else` => throw the `static` response.

    for(var i=0; i<Object.keys(error_messages).length; i++) {
        if(error_messages[i].code == error.statusCode) {

            error.statusMessage = error_messages[i].message;
            response.status(error.statusCode);
            response.json({
                'success': false,
                'code': error.statusCode,
                'info': error.statusMessage,
                'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY")
                });

            break;
            }
        else {

            response.status(404 || 500);
            response.json({
                'success': false,
                'code': response.statusCode,
                'info': 'Not found / Internal Server Error.',
                'timestamp': moment().format("hh:mm:ss.SSS a, MM/DD/YYYY")
                });
                
            }
        }
    });
        
    const server = app.listen(8000, () => console.log('Listening on port 8000...'));

export { server };