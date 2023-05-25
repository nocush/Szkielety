//Korzystając parametru bg przesłanego w adresie przez klienta, ustaw kolor tła strony html.

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static('./styles/css'));
app.get('/', (req, res) => {
    const bgColor = req.query.bg || 'white';
    res.send(`
    <html>
    <head>
    <title>zad19</title>
    </head>
    <body style="background-color:${bgColor}">
    <h1>zad19</h1>
    <p>Przesłany parametr bg: ${bgColor}</p>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log('Serwer działa na porcie ' + port);
});

//przykładowe wywołanie: http://localhost:3000/?bg=pink