const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api")

//setup express app
const app = express();

//connecting to mongodb
const uri = "mongodb+srv://dbcourseadmin:dbcourseadmin20@cluster0.ze2vl.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})




app.use(bodyParser.json());
app.use("/api",routes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})