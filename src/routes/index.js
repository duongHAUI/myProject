const site = require('./site');
const courses = require('./course');


function route(app){
    app.use('/courses',courses);
    app.use('/',site);
}

module.exports = route;
