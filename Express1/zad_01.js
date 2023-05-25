//dołączenie kodu szkieletu express do aplikacji oraz utworzenie instancji aplikacji internetowej o nazwie app
var express = require('express');
var app = express();
//utworzenie stałej PORT zawierającej numer portu, na którym będzie nasłuchiwał tworzony serwer
var PORT = 3000;
//utworznie routingu poprzez wywołanie metody get dla obiektu app i ustawienie trasy '/' oraz funkcji ją obsługującej (ang. callback), która następnie uruchamia metodę send na obiekcie odpowiedzi (ang. response) i która wyświetla w oknie przeglądarki tekst: Prosty serwer oparty na szkielecie programistycznym Express!
app.get('/', function(req, res) {
    res.send('Prosty serwer oparty na szkielecie programistycznym Express!');
});
app.get('/about', function(req, res) {
    res.send('Autor strony: Mateusz Bartoszek');
});
//wywołanie metody listen na instancji obiektu app zawierającej jako pierwszy parametr numer portu, a jako drugi funkcję zwrotną, która w terminalu wyświetli informację postaci: Serwer działa na porcie: 3000
//Aplikacja powinna zawierać definicję rutingu składającą się z trasy: '/name/:imie', odpowiedzi, której status wynosi 200, typu zwracanej treści: 'text/html' oraz samej treść strony www zbudowanej ze znaczników html
app.get('/name/:imie', function(req, res) {
    res.status(200).type('text/html').send('<h1>Witaj ' + req.params.imie + '</h1>');
});
//Zmodyfikować aplikację w ten sposób, aby przyjmowała dwa parametry i wyświetlała komunikat w postaci Cześć Jacek i Placek
app.get('/name/:imie/:nazwisko', function(req, res) {
    res.status(200).type('text/html').send('<h1>Cześć ' + req.params.imie + ' i ' + req.params.nazwisko + '</h1>');
});
app.listen(PORT, function() {
console.log('Serwer działa na porcie: ' + PORT);
});
