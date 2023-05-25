const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const users = require('./users.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }else {
        res.status(400).json({ msg: `Uzytkownik o id ${req.params.id} nie istnieje` });
    }
});

app.post('/api/users', (req, res) => {
    const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    status: "aktywny"
    }
    if(!newUser.name || !newUser.email){
    return res.status(400).json({msg: 'Wprowadź poprawne imię i nazwisko oraz email!'})
    }
    users.push(newUser)
    res.json(users)
   })

app.patch('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        const updUser = req.body;
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updUser.name ? updUser.name : user.name;
                user.email = updUser.email ? updUser.email : user.email;
                res.json({ msg: 'Uzytkownik zaktualizowany', user });
            }
        });
    } else {
        res.status(400).json({ msg: `Uzytkownik o id ${req.params.id} nie istnieje` });
    }
});

app.delete('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json({
            msg: 'Uzytkownik usunięty',
            users: users.filter(user => user.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `Uzytkownik o id ${req.params.id} nie istnieje` });
    }
});

   

app.listen(PORT, () => console.log("Serwer dziaĹa na porcie " + PORT))