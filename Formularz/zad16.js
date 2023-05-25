const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const getDate = require('./server-files/getDate');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}
);
//wysyłanie komunikatu do konsoli o zapytaniu o plik
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/styles/css/style.css'));
    console.log(getDate()+"--- Klient wysłał zapytanie o plik styles/css/style.css");
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, './scripts/script.js'));
    console.log(getDate()+"--- Klient wysłał zapytanie o plik scripts/script.js");
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(getDate()+"--- Klient wysłał zapytanie o plik index.html")
});

app.listen(port, () => {
    console.log(getDate()+'--- Serwer działa na porcie ' + port);
});
