//Import modułów: express, path, handlebars, express-handlebars oraz @handlebars/allow-prototype-access
const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
//Import modułu StudentController
const StudentController = require('./controllers/StudentController');
const RoutingController = require('./controllers/RoutingController');
//import db.js


const db = require('./db');

app.use(express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "./../views/"));

app.engine(
    "hbs",
    exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: "hbs",
        defaultLayout: "layout",
        layoutsDir: __dirname+"/../views/layouts",})
);



app.get('/',RoutingController.start);

app.get('/list',RoutingController.getList);

app.get("/addOrEdit",RoutingController.addOrEdit);

app.post("/",RoutingController.postStudent);

app.get("/:id",RoutingController.getStudent);

app.get("/delete/:id",RoutingController.deleteStudent);







app.listen(3000, () => {
    console.log('Server is listening on port 3000');
}
);

