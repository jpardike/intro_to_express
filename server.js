const express = require('express');
const app = express();

app.get('/somedata', (request, response) => {
    response.send('here is your requested data');
});

app.get('/about', (request, response) => {
    response.send('this page is all about me');
});

app.listen(3000, () => {
    console.log('App is listening on port: 3000');
});