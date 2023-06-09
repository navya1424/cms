const {globalVariables} = require('./config/configuration');
// const helpers = require('handlebars-helpers');

// const select = require('handlebars_helpers');
// const {selectOption} = require('./config/customFunctions');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbss = require('express-handlebars');
const {mongodburl} = require('./config/configuration')
const {PORT} = require('./config/configuration')
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
// hbs is used for setting view engine
// const means its never gonna 
// mongoose is an odm which helps in objec database modelling to model your app data(to interact with db)

const app = express();


//configure mongoose to connect to mongodb
mongoose.connect(mongodburl, {useNewUrlParser: true})
    .then(response => {
        console.log("mongodb connected successfully.");
    }).catch(er => {
        console.log("database connection failed." + er);
    })
// 


// setup view engine to use handlebars
app.engine('handlebars', hbss.engine({defaultLayout: 'default', runtimeOptions: {allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true}}));
app.set('view engine', 'handlebars');



/*  Flash and Session*/
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());


/* Use Global Variables */
app.use(globalVariables);


app.use(methodOverride('newMethod'));




//configure express :-
app.use(express.json());
app.use(express.urlencoded({extended : true}));
//'use' function is used to define middleware
//we can define middleware as a plugin which can be use to enhance the experince of your app and its functionality.
app.use(express.static(path.join(__dirname, 'public')));

//routes :
const defaultroutes = require('./routes/defaultroutes');
const adminroutes = require('./routes/adminroutes');
app.use('/', defaultroutes);
app.use('/admin', adminroutes);






app.listen(PORT, () => {
    console.log(`server is running on port number ${PORT}.`); //thia command is use to start the server on the given port no.(3000 for say)
});