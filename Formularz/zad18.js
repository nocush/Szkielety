
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/zamiana/:value/:toRad', (req, res) => {
    let value = req.params.value;
    let toRad = req.params.toRad;
    if (toRad == 'true') {
        res.send(value + ' stopni to ' + value * (Math.PI / 180)+' radianów');
    }
    else {
        res.send(value + ' radianów to ' + value * (180 / Math.PI)+' stopni');
    }
});

app.listen(port, () => {
    console.log('Serwer działa na porcie ' + port);
});

//przykładowe wywołanie: http://localhost:3000/zamiana/90/false