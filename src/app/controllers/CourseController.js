const coursesdb = require('../models/Course');


class CoursesController{
    index(req,res,next){
        coursesdb.find({})
            .then(courses=>{
                courses = courses.map(course => course.toObject());
                res.render('courses/courses',{courses});
            })  
            .catch(next);
    }

    //[GET] courses/course
    course(req,res,next){
        coursesdb.findOne({slug : req.params.slug})
            .then(course=>{
                course = course.toObject();
                res.render('courses/course',{course});
            })
            .catch(next);
    }
    //[GET] courses/create
    create(req,res,next){
        res.render('courses/create');
    }
    //[POST] courses/store
    storePost(req,res,next){
        const courseCreate   = new coursesdb(req.body);
        courseCreate.save()
            .then(course=>{
                res.redirect(`${courseCreate.slug}`)
            })
        
    }
    storeGet(req,res,next){
        res.render('courses/store');
        
    }
}
module.exports = new CoursesController;