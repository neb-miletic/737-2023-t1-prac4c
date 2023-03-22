const express = require('express');
const app = express();
const passport = require('passport');
require('./passport')
const jwt = require('jsonwebtoken');
const axios = require('axios')
const port = 3000;



// Use Passport.js middleware
app.use(passport.initialize());

// Define a protected route that requires authentication and authorization
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('This is a protected route.');
});



// Generate a JWT token
const token = jwt.sign({ sub: '1234567890' }, 'my_secret_key');

// Include the token in the "Authorization" header of your requests and make it available to the user
axios.get('http://localhost:3000/protected', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => console.log(response.data + ` \nThe token you need to put in Postman -> Authorization -> Bearer token is: ${token}`))
    .catch(error => console.error(error));


// Addition endpoint with authentication token requested
app.get('/addition/:num1/:num2',passport.authenticate('jwt', { session: false }), (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else {
        const result = num1 + num2;
        res.send(`The result of ${num1} + ${num2} is ${result}.`);
    }
});

// Subtraction endpoint  with authentication token requested
app.get('/subtraction/:num1/:num2',passport.authenticate('jwt', { session: false }), (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else {
        const result = num1 - num2;
        res.send(`The result of ${num1} - ${num2} is ${result}.`);
    }
});

// Multiplication endpoint with authentication token requested
app.get('/multiplication/:num1/:num2',passport.authenticate('jwt', { session: false }), (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else {
        const result = num1 * num2;
        res.send(`The result of ${num1} * ${num2} is ${result}.`);
    }
});

// Division endpoint with authentication token requested
app.get('/division/:num1/:num2',passport.authenticate('jwt', { session: false }), (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else if (num2 === 0) {
        res.status(400).send('Division by zero is not allowed.');
    } else {
        const result = num1 / num2;
        res.send(`The result of ${num1} / ${num2} is ${result}.`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice listening at http://localhost:${port}`);
});