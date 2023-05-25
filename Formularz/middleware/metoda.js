let metoda = (req, res, next) => {
    let path = "Ściezka: " + req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send('Metoda: ' + req.method + '<br>' + path);
    next();
}