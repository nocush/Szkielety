const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/form2", (req, res) => {
    res.sendFile(path.join(__dirname, "form2.html"))
    });

app.post("/result2", (req, res) => {
    let username = req.body.username;
    let l1 = req.body.l1 ? 'Rosyjski' : '';
    let l2 = req.body.l2 ? 'Angielski' : '';
    let l3 = req.body.l3 ? 'Niemiecki' : '';

    let jezyki = [];
    if (l1 !== '') {
        jezyki.push(l1);
    }
    if (l2 !== '') {
        jezyki.push(l2);
    }
    if (l3 !== '' ) {
        jezyki.push(l3);
    }
    var text = 'Imie i Nazwisko: ' + username + '<br>Jezyki:<ul>'
    jezyki.forEach((jezyk) => {
        text += '<li>' + jezyk + '</li>';
    });
    text += ('</ul>')
    res.send(text);
    }),

    app.listen(PORT, () => console.log("Serwer dziaĹa na porcie " + PORT))