const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/StudentDB", {useNewUrlParser: true})
.then((result) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});
