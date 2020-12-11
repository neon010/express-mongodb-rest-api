const express = require("express");
const { findOne } = require("../models/course");
const router = express.Router();
const Course = require("../models/course");

//getting all the courses from database
router.get("/courses", (req,res)=>{
    res.send({type:"GET"});
})

//adding a new course to database
router.post("/courses", (req,res)=>{
    Course.create(req.body).then((course)=>{
        res.send(course);
    }).catch((err)=>{
        res.status(400).send({error:err.message});
    });

})

//updating a new course to db
router.put("/courses/:id", (req,res)=>{
    Course.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        Course.findOne({_id:req.params.id}).then((course)=>{
            res.status(200).send(course);
        })

    }).catch((err)=>{
        console.log(err);
        res.status(400).send(err);
    });
})

//delete a course from db
router.delete("/courses/:id", (req,res)=>{
    Course.findByIdAndRemove({_id:req.params.id}).then((course)=>{
        res.send(course);
    }).catch((err)=>{
        res.status(400).send({error:err.message});
    })
})

module.exports = router