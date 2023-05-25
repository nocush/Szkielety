const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const hbs = require('hbs');

app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));

app.get("/form3", (req, res) => {
    res.sendFile(path.join(__dirname, "form3.html"))
    });

app.set('view engine', 'hbs');

app.get('/about', (req, res) => {
    res.render('about', {name:'Jan'})
});

app.post('/info', (req, res) => {
    let nazwisko = req.body.nazwisko
    let email = req.body.email
    let wiek = req.body.wiek
    res.render('info', {surname:nazwisko, email:email, age:wiek})
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
);