const express = require('express');
const app = express();
const port = 3000;



//Zmodyfikuj funkcję tak, aby wyświetlić informacje w oknie przeglądarki. Użyj do tego celu metody res.send().
let metoda = (req, res, next) => {
    let path = "Ściezka: " + req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send('Metoda: ' + req.method + '<br>' + path);
    next();
}

app.use(metoda);




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
