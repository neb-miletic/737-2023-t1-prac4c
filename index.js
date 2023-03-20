const express = require('express');
const app = express();
const port = 3000;

// Addition endpoint
app.get('/addition/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else {
        const result = num1 + num2;
        res.send(`The result of ${num1} + ${num2} is ${result}.`);
    }
});

// Subtraction endpoint
app.get('/subtraction/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else {
        const result = num1 - num2;
        res.send(`The result of ${num1} - ${num2} is ${result}.`);
    }
});

// Multiplication endpoint
app.get('/multiplication/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input parameters. Please provide valid numbers.');
    } else {
        const result = num1 * num2;
        res.send(`The result of ${num1} * ${num2} is ${result}.`);
    }
});

// Division endpoint
app.get('/division/:num1/:num2', (req, res) => {
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