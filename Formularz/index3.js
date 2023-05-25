const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const sanitizeValue = (value) => {
    const names = value.split(' ');
    return names.map(name => name.charAt(0).toUpperCase()).join(' ');
}

var regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}([ '][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}){0,2}$/;

app.use(express.urlencoded({ extended: true }));
const {check , validationResult} = require('express-validator');

app.get("/form3", (req, res) => {
    res.sendFile(path.join(__dirname, "form3.html"))
    });

app.post("/result3", [
    check('nazwisko').isLength({min:3}, {max:25}).withMessage('Nazwisko musi miec od 3 do 25 znakow').matches(regex).withMessage('Nazwisko musi skladac sie wylacznie z liter').trim().stripLow().escape(),
    check('nazwisko').customSanitizer((value) => { return sanitizeValue(value) }).bail(),
    check('email').isEmail().withMessage('Niepoprawny adres email').normalizeEmail().bail().stripLow(),
    check('wiek').isInt({min:0, max:110}).withMessage('Wiek spoza przedzialu').stripLow().bail()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const nazwisko = req.body.nazwisko;
    const email = req.body.email;
    const wiek = req.body.wiek;
    res.send('Nazwisko: ' + nazwisko + '<br>Email: ' + email + '<br>Wiek: ' + wiek);
    });

    app.listen(PORT, () => console.log("Serwer dziaĹa na porcie " + PORT))