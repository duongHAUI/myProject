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
                res.render('courses/store');
            })
            .catch(next);
        
    }
    //[GET] courses/store
    storeGet(req,res,next){
        coursesdb.find({})
            .then(courses=>{
                courses =  courses.map(course=>course.toObject())
                res.render('courses/store',{
                    courses,
                    helpers: {
                        index: (a,b) => a+b,
                    }
                })
            })
            .catch(next);
    }
    //[POST] courses/:_id/edit
    updateCourse(req,res,next){
        coursesdb.findById(req.params._id)
            .then(course=>{
                course  = course.toObject();
                res.render('courses/update-course',{course});
            })
            .catch(next);
    }
}
module.exports = new CoursesController;