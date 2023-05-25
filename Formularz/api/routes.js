const express = require('express');
const app = express();
const users = require('./../users.js');
const path = require('path');
const isAuthorized = require('../middleware/autoryzacja.js');
const router = express.Router();
const port = 3000;



    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    router.get('/form', (req, res) => {
        res.sendFile(path.join(__dirname, "../form.html"));
        });


    router.get('/users',isAuthorized, (req, res) => {
        res.json(users);
    });

    router.get('/users/:id',isAuthorized, (req, res) => {
        const found = users.some(user => user.id === parseInt(req.params.id));
        if (found) {
            res.json(users.filter(user => user.id === parseInt(req.params.id)));
        }else {
            res.status(400).json({ msg: `Uzytkownik o id ${req.params.id} nie istnieje` });
        }
    });

    //export modułu
    module.exports = router;
    
