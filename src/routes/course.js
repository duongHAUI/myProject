const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');



router.get('/create',coursesController.create);
router.post('/store',coursesController.storePost);
router.get('/store',coursesController.storeGet);
router.get('/:slug',coursesController.course);
router.get('/',coursesController.index);



module.exports = router;