
const Student = require('../models/Student');
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('handlebars');

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

function start(req, res){
    res.send(`
    <h3 style="text-align: center">Baza danych studentów</h3>
    <h4 style="text-align:center">Kliknij <a href ="/list">tutaj</a>, aby uzyskać dostęp do bazy</h4>`)
}

function getList(req, res) {
    Student.find().then((docs) => {
        res.render("list", { list: docs
        }) }).catch((err) => {
        console.log("Błąd pobierania danych" + err) })
        
}

function addOrEdit(req, res) {

    res.render("./../views/addOrEdit", {
        viewTitle: "Dodaj studenta"
    });
}

function postStudent(req, res) {
    if (req.body._id == "") {
        insert(req, res);
    } else {
        update(req, res);
    }
}

function getStudent(req, res) {
    Student.findById(req.params.id).then((doc)=>{
        res.render("./../views/addOrEdit", {
            viewTitle: "Aktualizuj dane studenta",
            student: doc
        });
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteStudent(req, res) {
    Student.findByIdAndRemove(req.params.id).then((doc)=>{
        res.redirect("./../views/list");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    start,
    getList,
    addOrEdit,
    postStudent,
    getStudent,
    deleteStudent
}

