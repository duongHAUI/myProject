const express = require('express');
const app = express();
const path = require('path')
const exphbs  = require('express-handlebars');
const route = require('./routes/index');
const port = 3000
const db = require('./config/db/index');
// Connect mongodb
db.connect();

//template engine
app.engine('hbs',exphbs({
  extname : 'hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'/views'));

// Static file
app.use(express.static(path.join(__dirname,'public','img')));


// middleware body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// routes 
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})