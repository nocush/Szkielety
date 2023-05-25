const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

//zadanie 10

/*
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"))
  })
  app.get("/result", (req, res) => {
    let username = req.query.username
    let password = req.query.password
    res.send("UĹźytkownik: " + username + "<br>HasĹo: " + password)
    })
    app.listen(PORT, ()=> console.log(`Serwer dziaĹa na porcie ${PORT}`))*/

//const bodyParser = require('body-parser'); //wczytanie danych z formularza
app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"))
})
app.post("/result", (req, res) => {
  let username = req.body.username
  let password = req.body.password
  if (username && password) {
    res.send('Uzytkownik: ' + username + '<br>Haslo: ' + password);
  }
   else {
    res.send('uzupelnij dane');
  }
}),
  app.listen(PORT, () => console.log("Serwer dziaĹa na porcie " + PORT))