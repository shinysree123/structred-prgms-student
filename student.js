var Express=require('express');
var Bodyparser=require('body-parser');
var Mongoose=require('mongoose');
var Studentrouter = require('./routes/routes');
var app =Express();
app.use(Bodyparser.urlencoded({extended:false}))
app.use('/',Studentrouter);
Mongoose.connect("mongodb+srv://shinyjoseph:shiny@cluster0-ortj8.mongodb.net/test?retryWrites=true&w=majority");
app.listen(process.env.PORT||4000,()=>{
    console.log("server started");
});
