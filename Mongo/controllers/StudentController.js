//import Student
const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require('path');
const app = express();
//import RoutingController
const RoutingController = require('./RoutingController');


async function insert(req, res){
    let student = new Student()
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    try{
        await student.save();
        res.redirect("./../views/list");
    }catch(err){
        console.log(err);
    }
}

async function update(req, res){
    try{
        await Student.addOrEdit(req.body);
        res.redirect("./../views/list");
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    insert,
    update
}




