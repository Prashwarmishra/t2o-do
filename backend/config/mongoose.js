//require mongoose
const mongoose = require('mongoose');

//set up database path
mongoose.connect(
    'mongodb+srv://prashwarmishra:31sa3skfCrp4cwlm@cluster0.f41zw.mongodb.net/TODO?retryWrites=true&w=majority' 
    || 'mongodb://localhost/todo-development', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
});

//establish mongoose connection
const db = mongoose.connection;

//if error, bind the error to the console
db.on('error', console.error.bind(console, 'Error connecting to the database'));

//if connection is established, print message on console
db.once('open', function(){
    console.log('Successfully connected to database.');
});