const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create course schema & models

const courseSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'id is required']
    },
    name:{
        type: String,
        required: [true, 'name is required']
    }
})

const Course = mongoose.model('course', courseSchema);
module.exports = Course;